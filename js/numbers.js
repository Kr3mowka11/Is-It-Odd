document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const number = urlParams.get("number");

    if (number !== null) {
        const num = parseInt(number, 10);
        const state = num % 2 === 0 ? "even" : "odd"

        document.body.innerHTML = `<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-4"><div class="relative w-full max-w-xl p-8 space-y-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 text-white overflow-hidden"><div class="absolute -top-20 -right-20 w-40 h-40 bg-red-500/30 rounded-full blur-2xl"></div><div class="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/30 rounded-full blur-2xl"></div><div class="relative z-10"><h1 class="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-300 mb-2">Is It Odd?</h1><p class="text-5xl text-center text-red-100 text-lg">Enter a number and check for its oddness</p><div class="mt-8 flex justify-center"><div class="w-16 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div></div><form method="get" action="/" class="mt-8 space-y-6" data-discover="true"><div class="group"><p class="block text-center text-red-100 text-3xl">The number ${num} is ${state}!</p></div><div><button type="submit" class="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-pink-500 to-red-500 rounded-xl hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-red-900 transform hover:scale-105 transition-all shadow-lg shadow-pink-500/25">Go Home</button></div></form></div></div></div>`;
    }
});