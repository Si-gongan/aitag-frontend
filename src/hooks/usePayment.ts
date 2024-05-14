'use client';

import { CardType } from '@/types/common';
import { fetchWithInterceptor } from '@/utils/fetchWithInterceptor';
import { loadBrandPay, BrandPayInstance } from '@tosspayments/brandpay-sdk';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const clientKey = process.env.NEXT_PUBLIC_BRANDPAY_CLIENT_KEY;

export const usePayment = (customerKey?: string) => {
  const router = useRouter();

  const [brandpay, setBrandpay] = useState<BrandPayInstance | null>(null);

  const [card, setCard] = useState<CardType | null>(null);

  // initialize brandpay
  useEffect(() => {
    if (!customerKey) return;

    (async () => {
      const brandpay = await loadBrandPay(clientKey ?? '', customerKey, {
        redirectUrl: window.location.origin + '/payment/callback-auth',
      });
      setBrandpay(brandpay);
    })();
  }, [customerKey]);

  const updateCard = useCallback(async () => {
    try {
      const methods = await brandpay?.getPaymentMethods();

      if (!methods) return;
      const { cards } = methods;

      if (!cards[0]) return;
      setCard(cards[0]);
    } catch {}
  }, [brandpay]);

  const addCard = useCallback(async () => {
    await brandpay?.addPaymentMethod('카드');

    await updateCard();
  }, [brandpay]);

  const setupPassword = useCallback(async () => {
    try {
      await brandpay?.setupPassword();
    } catch {}
  }, [brandpay]);

  const openSettings = useCallback(async () => {
    await brandpay?.openSettings();
  }, [brandpay]);

  useEffect(() => {
    updateCard();
  }, [updateCard]);

  const requestPayment = useCallback(
    async (amount: number, orderName: string, customerEmail: string) => {
      if (!brandpay) return;

      const orderId = uuidv4();

      try {
        const data = await brandpay.requestPayment({
          amount,
          orderId,
          orderName,
          customerEmail,
          methodId: card?.id,
        });

        if (!data) {
          throw new Error('결제 요청에 실패했습니다.');
        }

        const { paymentKey } = data;

        const res = await fetchWithInterceptor(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/confirm`, {
          method: 'POST',
          body: JSON.stringify({
            paymentKey,
            orderId,
            amount,
          }),
        });
        const json = await res.json();
        const paymentId = json.result.payment.id;

        router.push(`/payment/success?paymentId=${paymentId}`);
      } catch (e: any) {
        const reason = e?.code;

        if (reason === 'USER_CANCEL') {
          return;
        }

        router.push(`/payment/fail?reason=${reason}`);
      }
    },
    [brandpay, card]
  );

  return { card, addCard, setupPassword, requestPayment, openSettings };
};
