import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="h-100vh my-40">
      <div className="flex flex-col w-full justify-center items-center">
        <div>
          <p className="inter text-[#e3e3e3] font-semibold md:text-5xl text-3xl sm:text-4xl">
            Contact Us
          </p>
        </div>
        <p className="mb-20 mt-4 codesemi text-[#a9a9a9] md:text-lg text-sm flex text-center mx-10">
          &quot;Hello there! In case of any query. Drop us a maessage!!&quot;
        </p>
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="codesemi md:w-1/2 w-[90%] md:mx-20 mx-10 md:mt-0">
          <form
            action="https://formsubmit.co/8fc742b48d7a6c6a4745add36861b097"
            method="POST"
            target="_blank"
            onSubmit={onSubmit}
            className="flex items-end flex-col"
          >
            <input
              className="w-full border-2 rounded-sm my-2 border-[#8c8c8c95] bg-[#00000043] font-semibold placeholder-opaque-white py-2 px-4 md:text-base text-sm"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-[#87daea] mt-1 md:text-base text-xs">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max length exceeded"}
              </p>
            )}
            <input
              className="w-full border-2 rounded-sm my-2 border-[#8c8c8c95] bg-[#00000043] font-semibold placeholder-opaque-white py-2 px-4 md:text-base text-sm"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-[#87daea] mt-1 md:text-base text-xs">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid Email address"}
              </p>
            )}
            <textarea
              className="w-full border-2 rounded-sm my-2 border-[#8c8c8c95] bg-[#00000043] font-semibold placeholder-opaque-white py-2 px-4 md:text-base text-sm"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.email && (
              <p className="text-[#87daea] mt-1 md:text-base text-xs">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLenght" &&
                  "Max Length is 2000 chars."}
              </p>
            )}
            <button
              type="sumbit"
              className="px-4 w-[180px] py-3 bg-[#04090f] border-[#8c8c8c95] border-2 font-semibold text-[#b7b7b7] mt-5 hover:bg-[#9ed0ff] hover:text-[#000000] transition duration-200 md:text-base text-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
