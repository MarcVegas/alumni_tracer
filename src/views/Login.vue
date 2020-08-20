<template>
  <div>
      <div class="max-w-md bg-white shadow-md mx-auto mt-10 p-10">
          <div class="flex flex-col">
              <h2 class="text-2xl text-center font-bold">Login</h2><br>
              <form action="">
                <div class="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email">
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password">
                </div><br><br>
                <div class="flex flex-col lg:flex-row items-center">
                    <button type="submit" class="button bg-blue-500 w-1/2">Sign In</button>
                    <a class="font-bold text-blue-400 ml-2 w-1/2" href="">Forgot your password?</a>
                </div>
              </form>
              <div>
                  <p class="text-center mt-3 text-sm">Don't have an account? Click <router-link to="/register" class="font-bold">here</router-link></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>

</style>