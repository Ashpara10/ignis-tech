import { useState } from "react";
import { redirect } from "react-router-dom";

const Form = () => {
  const [type, setType] = useState<"login" | "register">("register");
  const [user, setUser] = useState(() =>
    type === "login"
      ? { email: "", password: "" }
      : { username: "", email: "", password: "" }
  );
  const [show, setShow] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ user });
        localStorage.setItem("token", JSON.stringify(user));
        redirect("/");
      }}
    >
      <label htmlFor="">
        * Username
        <input
          value={user?.username}
          name="username"
          type="text"
          onChange={(e) =>
            setUser({ ...user, [e?.target?.name]: e?.target?.value })
          }
          className="form-input"
        />
      </label>

      {type === "register" && (
        <label htmlFor="">
          * Email
          <input
            value={user?.email}
            name="email"
            type="email"
            className="form-input"
            onChange={(e) =>
              setUser({ ...user, [e?.target?.name]: e?.target?.value })
            }
          />
        </label>
      )}
      <label htmlFor="">
        * Password
        <div className="flex w-full items-center justify-center">
          <input
            value={user?.password}
            onChange={(e) =>
              setUser({ ...user, [e?.target?.name]: e?.target?.value })
            }
            name="password"
            type={show ? "text" : "password"}
            className="form-input"
          />
          {/* <button onClick={() => setShow(!show)} type="button">
            {show ? "hide" : "show"}
          </button> */}
        </div>
      </label>
      <button
        type="submit"
        className="w-full disabled:opacity-80 rounded-lg mt-2 bg-orange-500 text-white px-4 py-2"
      >
        Register
      </button>
      {type === "register" ? (
        <span className="flex items-center justify-center gap-1">
          Already have an account?
          <button
            className="hover:underline text-indigo-600"
            type="button"
            onClick={() => setType("login")}
          >
            Login
          </button>
        </span>
      ) : (
        <span className="flex items-center justify-center gap-1">
          Don't have an account?
          <button
            className="hover:underline text-indigo-600"
            type="button"
            onClick={() => setType("register")}
          >
            Register
          </button>
        </span>
      )}
    </form>
  );
};

export default Form;
