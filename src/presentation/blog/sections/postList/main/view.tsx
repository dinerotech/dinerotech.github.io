import React from "react";
import PostView from "@/presentation/blog/sections/postList/post/view";
import SpinnerView from "@/presentation/common/spinner/view";

export default function View() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
      <PostView
        title="Boost your conversion rate"
        summary="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
        category="marketing"
        date={new Date()}
        url={null}
        img={null}
        author={{
          name: "Yahya Moallim",
          title: "Software Engineer",
          avatar: null
        }}
      />
      <PostView
        title="Boost your conversion rate"
        summary="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
        category="marketing"
        date={new Date()}
        url={null}
        img={null}
        author={{
          name: "Yahya Moallim",
          title: "Software Engineer",
          avatar: null
        }}
      />
      <div className="relative isolate flex items-center flex-col">
        <div className="whitespace-nowrap px-4 py-10 text-center text-sm text-gray-500">
          No post available
        </div>
      </div>

      <div className="relative isolate flex items-center flex-col">
        <div className="whitespace-nowrap px-4 py-10 text-center text-sm text-gray-500">
          <SpinnerView />
        </div>
      </div>
    </div>
  );
}
