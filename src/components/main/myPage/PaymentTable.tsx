import { formattedDateV2 } from '@/utils/formattedDate';
import { GetPaymentType, PaymentItemType } from '@/types/common';
import { PAYMENT_HEADER } from '@/utils/constants';

export default function PaymentTable({ payments }: { payments: GetPaymentType[] }) {
  const headerKey = PAYMENT_HEADER.map((header) => header.value);

  // tbody에 맞춰 데이터들을 만드는 것
  const items: PaymentItemType[] = payments.map((data, index) => {
    const formattedData = formattedDateV2(data.createdAt);
    return {
      index: index + 1,
      rate: data.rate.toUpperCase(),
      createdAt: formattedData,
      amount: data.amount + ' 원',
      method: data.method,
    };
  });

  return (
    <table className="w-full">
      <thead className="bg-grey/0 border-b-1 border-[#C9CFDA]">
        <tr className="flex h-60">
          {PAYMENT_HEADER.map((header) => (
            <th
              key={header.value}
              className={`flex items-center justify-center font-medium text-[#00072B] ${header.value === 'index' ? 'w-70' : header.value === 'rate' ? 'w-226' : header.value === 'createdAt' ? 'w-194' : header.value === 'amount' ? 'w-270' : 'w-210'}`}>
              {header.value === 'amount' ? (
                <div className="flex flex-col gap-4 items-center">
                  {header.text}
                  <p className="text-grey/6">(부가세 10% 별도)</p>
                </div>
              ) : (
                header.text
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item, index) => (
            <tr key={item.index} className="flex w-full h-48">
              {headerKey.map((key) => (
                <td
                  key={key + (index + 1)}
                  className={`flex items-center justify-center text-[#00072B] ${key === 'index' ? 'w-70' : key === 'rate' ? 'w-226' : key === 'createdAt' ? 'w-194' : key === 'amount' ? 'w-270' : 'w-210'}`}>
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
