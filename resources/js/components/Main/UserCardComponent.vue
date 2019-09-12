<template>
    <div class="user-card-component">
        <a-card>
            <!-- User Image -->
            <a-avatar class="avatar" :size="50" icon="user" />
            <!-- Fullname -->
            <h3 class="m0">David Peralta</h3>
            <!-- Username -->
            <span>@peraltadavidr</span>
        </a-card>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.user-card-component{
    .avatar{
        float: left;
        margin-right: 12px;
    }
}
</style>