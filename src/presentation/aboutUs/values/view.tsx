import React from "react";

export default function View() {
  return (
    <div className="mx-auto mt-6 max-w-7xl px-6 sm:mt-12 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Our values
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <dt className="font-semibold text-gray-900">Be world-class</dt>
          <dd className="mt-1 text-gray-600">
            Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint
            et magnam exercitationem quia. Ullam voluptas nihil vitae dicta
            molestiae et. Aliquid velit porro vero.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">
            Share everything you know
          </dt>
          <dd className="mt-1 text-gray-600">
            Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime
            adipisci illo id molestiae. Cumque cum ut minus rerum architecto
            magnam consequatur. Quia quaerat minima.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Always learning</dt>
          <dd className="mt-1 text-gray-600">
            Aut repellendus et officiis dolor possimus. Deserunt velit quasi
            sunt fuga error labore quia ipsum. Commodi autem voluptatem nam.
            Quos voluptatem totam.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Be supportive</dt>
          <dd className="mt-1 text-gray-600">
            Magnam provident veritatis odit. Vitae eligendi repellat non. Eum
            fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi.
            Praesentium rerum error deserunt harum.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Take responsibility</dt>
          <dd className="mt-1 text-gray-600">
            Sit minus expedita quam in ullam molestiae dignissimos in harum.
            Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus
            laboriosam voluptas perspiciatis error.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Enjoy downtime</dt>
          <dd className="mt-1 text-gray-600">
            Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum
            dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est
            velit consequatur distinctio.
          </dd>
        </div>
      </dl>
    </div>
  );
}