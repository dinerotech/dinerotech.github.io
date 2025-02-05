import React from "react";
import QuestionView from "@/presentation/faqs/questions/question/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <dl className="mt-16 divide-y divide-gray-900/10">
            {t.faqs.questionsSection.blocks.map((item, index) => (
              <QuestionView
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
