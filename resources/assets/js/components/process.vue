<template>
    <div class="about container">
        <div class="row">
            <div class="col-md-6">
                <h3>Sam is jouw persoonlijke <span>{{ samFunctions[samIndex] }}</span>.</h3>
                <p>
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
            }
        },
        methods: {
            updateSamIndex() {
                this.samIndex++;

                if(this.samIndex === this.samFunctions.length) {
                    this.samIndex = 0;
                }
            }
        },
        mounted() {
            setInterval(function () {
                this.updateSamIndex();
            }.bind(this), 2000); 
        }
    }
</script>