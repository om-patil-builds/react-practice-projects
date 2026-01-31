import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 w-88 rounded shadow"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="w-full mb-3 px-4 py-2 border rounded outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded active:scale-95"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login