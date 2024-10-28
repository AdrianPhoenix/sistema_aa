"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const Home = () => {
  const [error, setError] = useState(null);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const resp = await signIn("credentials", {
      username: data.user_name,
      password: data.user_password,
      redirect: false,
    });

    if (resp.error) {
      setError(resp.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });
  return (
    <div className="bg-black h-screen w-full text-white flex flex-col items-center justify-center">
      <form
        className="w-[15rem] h-[15rem] flex flex-col justify-center bg-slate-800 p-4"
        onSubmit={onSubmit}
      >
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <label htmlFor="user">User</label>
        <input
          className="text-black px-2"
          type="text"
          {...register("user_name", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
        />
        
        {errors.user_name && (
          <span className="text-sm text-red-600">
            *{errors.user_name.message}
          </span>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="text-black px-2"
          {...register("user_password", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
        />
        
        {errors.user_password && (
          <span className="text-sm text-red-600">
            *{errors.user_password.message}
          </span>
        )}

        <input type="submit" className="bg-stone-950 mt-2 cursor-pointer" />



      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </div>
  );
};

export default Home;
