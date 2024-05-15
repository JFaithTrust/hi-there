import './App.css'
import {Route, Routes} from "react-router-dom";
import AuthLayout from "@/_auth/auth-layout.tsx";
import SignInForm from "@/_auth/forms/sign-in-form.tsx";
import SignUpForm from "@/_auth/forms/sign-up-form.tsx";
import RootLayout from "@/_root/root-layout.tsx";
import {AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile} from "@/_root/pages";
import {Toaster} from "@/components/ui/toaster.tsx";

function App() {

  return (
    <>
      <main className='flex h-screen'>
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={<SignInForm/>}/>
            <Route path='/sign-up' element={<SignUpForm/>}/>
          </Route>

          <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/saved" element={<Saved/>}/>
            <Route path="/all-users" element={<AllUsers/>}/>
            <Route path="/create-post" element={<CreatePost/>}/>
            <Route path="/update-post/:id" element={<EditPost/>}/>
            <Route path="/posts/:id" element={<PostDetails/>}/>
            <Route path="/profile/:id/*" element={<Profile/>}/>
            <Route path="/update-profile/:id" element={<UpdateProfile/>}/>
          </Route>
        </Routes>

        <Toaster />
      </main>
    </>
  )
}

export default App
