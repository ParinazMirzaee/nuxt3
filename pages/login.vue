<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
  if (error){
    console.log(error)
  }
}
async function signOut() {
  const { error } = await supabase.auth.signOut()
}


/*async function signUpNewUser() {
  const { data, error } = supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https//example.com/welcome'
    }
  })
}
async function signInWithEmail() {
  const { data, error } = supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password'
  })
}

async function signOut() {
  const { error } = supabase.auth.signOut()
}*/
/*const login = async () => {
  const {error} = supabase.auth.signInWithOAuth({
    provider: "github"
  });
  if (error) {
    console.log(error);
  }
}*/

</script>

<template>
  <NuxtLayout name="custom">
    <div>
      <h1 class="font-bold">Login</h1>
      <button @click="signInWithGithub" class="bg-primary border-0 rounded text-white">
        login with GITHUB
      </button>
      <button @click="signOut" class="bg-danger border-0 rounded text-white">
        signOut
      </button>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>