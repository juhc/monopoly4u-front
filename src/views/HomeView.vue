<template>
    <div class="text-zinc-50 mt-36">
        <div class="flex flex-col justify-center text-center">
            <div class="text-5xl font-bold">Приглашаем в Монополию.</div>
            <div class="text-xl font-semibold mt-5">Это отличное место, чтобы поиграть с друзьями в легендарную настольную
                игру.</div>
            <RouterLink :to="{ name: 'user' }"
                class="bg-zinc-50 text-xl font-semibold hover:bg-zinc-200 transition duration-150 ease-in-out text-zinc-950 mt-5 rounded-md w-44 h-12 flex items-center justify-center self-center content-center">
                Начать играть
            </RouterLink>
        </div>
    </div>
</template>