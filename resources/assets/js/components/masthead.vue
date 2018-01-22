<template>
    <header class="masthead">
        <div class="masthead__top-gradient">
        </div>
        <div class="masthead__bottom-gradient" ref="bottomGradient">
        </div>
        <div class="container">
            <div class="row">
                <div class="masthead__content col-md-6">
                    <h1 data-aos="fade-zoom-in">Ontmoet <br /><span>Sam</span></h1>
                </div>

                <div class="masthead__image col-md-6">
                    <img data-aos="fade-zoom-in" src="public/images/screenshot.png" />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Velocity from 'velocity-animate';

    export default {
        methods: {
            animateGradientIn() {
                var bottomGradient = this.$refs.bottomGradient;
                Velocity(bottomGradient, {
                    width: '100vw'
                }, {
                    delay: 200,
                    duration: 500,
                    easing: 'easeInQuad',
                });
            }
        },
        mounted() {
            this.animateGradientIn();
        }
    }
</script>