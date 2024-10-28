"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddCustomer = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const resp = await axios;

    if (resp.error) {
      setError(resp.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });
  return (
    <div className="bg-black h-screen w-full text-white flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-bold">Agregar Cliente</h2>
      <form
        className="flex gap-3 justify-center bg-slate-800 p-4"
        onSubmit={onSubmit}
      >
        <section className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            className="text-black px-2"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />

          {errors.name && (
            <span className="text-sm text-red-600">*{errors.name.message}</span>
          )}

          <label htmlFor="lastname">Apellido</label>
          <input
            type="text"
            className="text-black px-2"
            {...register("lastname", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />

          {errors.lastname && (
            <span className="text-sm text-red-600">
              *{errors.lastname.message}
            </span>
          )}

          <label htmlFor="email">Correo</label>
          <input
            type="email"
            className="text-black px-2"
            {...register("email", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />

          {errors.email && (
            <span className="text-sm text-red-600">
              *{errors.email.message}
            </span>
          )}

          <label htmlFor="cedula">Cedula</label>
          <input
            type="text"
            className="text-black px-2"
            {...register("cedula", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />

          {errors.cedula && (
            <span className="text-sm text-red-600">
              *{errors.cedula.message}
            </span>
          )}

          <label htmlFor="phone">Télefono</label>
          <input
            type="text"
            className="text-black px-2"
            {...register("phone", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />

          {errors.phone && (
            <span className="text-sm text-red-600">
              *{errors.phone.message}
            </span>
          )}
        </section>

        <section className="flex flex-col">
          <label htmlFor="direction">Dirección</label>
          <textarea
            type="text"
            className="text-black px-2"
            {...register("direction", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />

          {errors.direction && (
            <span className="text-sm text-red-600">
              *{errors.direction.message}
            </span>
          )}

          <label htmlFor="type_client">Tipo de cliente</label>
          <select
            className="text-black"
            {...register("type_client", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          >
            <option selected disabled>
              {" "}
              -Elegir-{" "}
            </option>
            <option value="0">Préstamo</option>
            <option value="1">Financiación</option>
            <option value="2">Inversor</option>
          </select>
          {errors.type_client && (
            <span className="text-sm text-red-600">
              *{errors.type_client.message}
            </span>
          )}

          <label htmlFor="loan">Monto del préstamo</label>
          <input
            type="number"
            className="text-black"
            {...register("loan", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.loan && (
            <span className="text-sm text-red-600">*{errors.loan.message}</span>
          )}

          <label htmlFor="loan_percentage">Porcentage del préstamo</label>
          <input
            type="number"
            className="text-black"
            {...register("loan_percentage", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.loan_percentage && (
            <span className="text-sm text-red-600">
              *{errors.loan_percentage.message}
            </span>
          )}

          <label htmlFor="loan_date">Fecha del préstamo</label>
          <input
            type="date"
            className="text-black"
            {...register("loan_date", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.loan_date && (
            <span className="text-sm text-red-600">
              *{errors.loan_date.message}
            </span>
          )}

          <input type="submit" className="bg-stone-950 mt-2 cursor-pointer" />
        </section>
      </form>
    </div>
  );
};

export default AddCustomer;
