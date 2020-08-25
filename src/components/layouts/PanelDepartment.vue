<template>
  <div>
    <div class="segment">
        <h3 class="font-bold text-2xl text-gray-800 mb-1">Departments</h3>
        <div class="flex justify-between items-center mt-3">
            <div>
                <div>
                    <label>Show: </label>
                    <div class="inline-block relative w-24">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">All</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down w-6 h-6"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div class="field inline-block ml-3">
                        <input type="text" name="search" placeholder="Search Department">
                    </div>
                </div>
            </div>
            <div>
                <button class="button bg-blue-700 focus:outline-none">
                <svg viewBox="0 0 20 20" fill="currentColor" class="plus w-6 h-6 inline-block"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                <span class="text-sm">Add Department</span>
                </button>
            </div>
        </div>
        <div>
            <table class="table-auto w-full mt-8">
                <thead>
                    <tr class="bg-gray-300">
                        <th>Department</th>
                        <th>Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>College of Information Communications Technology and Engineering</td>
                        <td>CICTE</td>
                        <td>
                            <div class="flex justify-center">
                                <button class="icon-button hover:bg-teal-700">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="eye w-4 h-4 text-gray-800"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                                </button>
                                <button class="icon-button hover:bg-blue-700">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-4 h-4 text-gray-800"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                </button>
                                <button class="icon-button hover:bg-red-600">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-4 h-4 text-gray-800"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>College of Business Administration</td>
                        <td>COB</td>
                        <td>
                            <div class="flex justify-center">
                                <button class="icon-button hover:bg-teal-700">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="eye w-4 h-4 text-gray-800"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                                </button>
                                <button class="icon-button hover:bg-blue-700">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-4 h-4 text-gray-800"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                </button>
                                <button class="icon-button hover:bg-red-600">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-4 h-4 text-gray-800"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PanelDepartment'
}
</script>

<style>

</style>