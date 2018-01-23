<template>
    <div class="challenges container-fluid">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <h3 data-aos="fade-zoom-in">Uitdagingen</h3>
                    <p data-aos="fade-zoom-in">
                        Met Sam zijn wij de volgende uitdagingen aangegaan:
                    </p>
                </div>
            </div>


            <div class="row justify-content-center">
                <div v-for="(challenge, index) in challenges" class="challenges__challenge col-md-4" v-bind:class="{ 'offset-md-2': (index % 2 != 0) }">
                    <h4 data-aos="fade-zoom-in">
                        <div class="challenges__check-wrapper">
                            <img src="public/images/circle.svg" />
                            <img data-aos="fade-zoom-in" data-aos-delay="600" src="public/images/checked-circle.svg" />
                        </div>
                        {{ challenge.title }}
                    </h4>
                    <p data-aos="fade-zoom-in">
                        {{ challenge.body }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Velocity from 'velocity-animate';

    export default {
        data() {
            return {
               challenges: [{
                   title: "User-centered design",
                   body: "Sam moet gebruiksvriendelijk zijn en voor de gehele doelgroep en een goede user experience bieden."
               }, {
                   title: "Iets unieks",
                   body: "Sam moet nieuw en overtuigend zijn."
               }, {
                   title: "Artificial Intelligence",
                   body: "Met behulp van AI moet Sam een waardige gesprekspartner worden voor de gebruiker."
               }, {
                   title: "Klantbinding",
                   body: "Sam moet ervoor zorgen dat er een relatie ontstaat tussen de gebruiker en Beeld en Geluid."
               }, {
                   title: "Gezicht van Sam",
                   body: "Sam moet voor iedere gebruiker uniek zijn, daarom is er gekozen om Sam geen gezicht te geven en de gebruiker dit zelf in te laten beelden."
               }]
            }
        }
    }
</script>