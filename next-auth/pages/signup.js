import { useState } from "react";
import { useRouter } from "next/router";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const singnUpHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "success") router.push("/signin");
  };
  return (
    <div>
      <h3>Sign Up Form</h3>
      <input
        placeholder="Email"
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={singnUpHandler}>signUp</button>
    </div>
  );
};

export default signUp;
