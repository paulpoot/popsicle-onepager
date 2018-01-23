<template>
    <div class="team container-fluid">
        <div class="container">
            <div class="row justify-content-between">
                <div class="team__member col-sm-5 col-md-2" v-for="member in teamMembers" @click="openLink(member.link)">
                    <img :src="'public/images/' + member.img" />
                    <h4>{{ member.name }}</h4>
                    <span>{{ member.title }}</span>
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
               teamMembers: [{
                   name: "Lorem",
                   img: "ipsum.jpg", 
                   title: "dolor",
                   link: "https://sit.amet"
               }]
            }
        },
        methods: {
            openLink(target) {
                if(target) {
                    window.open(target, '_blank');
                }
            }
        }
    }
</script>