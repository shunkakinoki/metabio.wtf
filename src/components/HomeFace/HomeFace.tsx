// import {
//   AnnotationIcon,
//   GlobeAltIcon,
//   LightningBoltIcon,
//   MailIcon,
//   ScaleIcon,
// } from "@heroicons/react/outline";
import Image from "next/image";

// const transferFeatures = [
//   {
//     id: 1,
//     name: "Competitive exchange rates",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: GlobeAltIcon,
//   },
//   {
//     id: 2,
//     name: "No hidden fees",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: ScaleIcon,
//   },
//   {
//     id: 3,
//     name: "Transfers are instant",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: LightningBoltIcon,
//   },
// ];
// const communicationFeatures = [
//   {
//     id: 1,
//     name: "Mobile notifications",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: AnnotationIcon,
//   },
//   {
//     id: 2,
//     name: "Reminder emails",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: MailIcon,
//   },
// ];

export const HomeFace = () => {
  return (
    <div className="overflow-hidden py-16 lg:py-24 bg-gray-50">
      <div className="relative px-4 sm:px-6 lg:px-8 mx-auto max-w-xl lg:max-w-7xl">
        <div className="relative text-center">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            The metaverse gateway
          </h2>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight leading-8 text-center text-gray-900">
            A better way to send money
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>
        <div className="lg:grid relative lg:grid-cols-2 lg:gap-8 lg:items-center mt-12 lg:mt-24">
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Transfer funds world-wide
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>
            {/* <dl className="mt-10 space-y-10">
              {transferFeatures.map(item => {
                return (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="flex absolute justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                );
              })}
            </dl> */}
          </div>
          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <Image
              className="relative mx-auto"
              src="/ogp.png"
              alt="screenshot"
              layout="responsive"
              height={490}
              width={490}
            />
            {/* <img
              className="relative mx-auto"
              width={490}
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
            /> */}
          </div>
        </div>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Coming soon...
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>
            </div>
            <div className="relative lg:col-start-1 -mx-4 mt-10 lg:mt-0">
              <Image
                className="relative px-3 mx-auto"
                src="/mock.png"
                alt="screenshot"
                layout="responsive"
                height={300}
                width={390}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
