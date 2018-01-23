<template>
    <div class="bottom container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    Team POPsicle.
                </div>
                <div class="bottom__elevator col-md-6">
                    <span v-scroll-to="{
                        el: '#app',
                        duration: 1000,
                        easing: 'ease-in-out',
                    }">
                        Terug naar boven
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>