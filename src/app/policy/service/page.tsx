import { POLICY_SERVICE } from '@/utils/policy';

export default function ServicePage() {
  return (
    <main className="flex justify-center w-full my-64 text-grey/7">
      <div className="flex flex-col gap-40 w-1000">
        <h1 className="text-24 font-bold">이용약관</h1>
        <div className="flex flex-col gap-20 text-16">
          {POLICY_SERVICE.map((policy) => (
            <div key={policy.title}>
              <h3 className="font-bold mb-8">{policy.title}</h3>
              {policy.content.map((item, index) => (
                <p key={index} className="leading-26">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
