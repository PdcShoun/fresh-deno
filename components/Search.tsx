export default function Search() {
  return (
  <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <form>
      <input type="text" name="q" placeholder="Search username"/>
      <button type="submit">Search</button>
    </form>
  </section>
  )
}