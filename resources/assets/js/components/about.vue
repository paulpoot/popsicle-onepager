<template>
    <div class="about container">
        <div class="row">
            <div class="col-md-6">
                <h3 data-aos="fade-zoom-in">Sam is jouw persoonlijke <span ref="samFunction">{{ samFunctions[samIndex] }}</span></h3>
                <p data-aos="fade-zoom-in">
                    Sam biedt een leuke, vernieuwende en persoonlijke ervaring. Jouw Sam is uniek! 
                    Sam leert graag van je om ervoor te zorgen dat er voor jou een nieuwe wereld open gaat.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Velocity from 'velocity-animate';

    export default {
        data() {
            return {
               samFunctions: ["gids", "buddy"], 
               samIndex: 0,
               animationLength: 250,
            }
        },
        methods: {
            updateSamFunction() {
                var samFunction = this.$refs.samFunction;

                Velocity(samFunction, {
                    opacity: 0,
                }, {
                    duration: this.animationLength,
                    easing: 'easeInQuad',
                    complete: this.updateSamIndex(),
                });

                Velocity(samFunction, 'reverse', {
                    delay: this.animationLength,
                    duration: this.animationLength,
                    easing: 'easeInQuad',
                })
            },

            updateSamIndex() {
                setTimeout(function () {
                    this.samIndex++;

                    if(this.samIndex === this.samFunctions.length) {
                        this.samIndex = 0;
                    }
                }.bind(this), this.animationLength); 
            }
        },
        mounted() {
            setInterval(function () {
                this.updateSamFunction();
            }.bind(this), 2000); 
        }
    }
</script>