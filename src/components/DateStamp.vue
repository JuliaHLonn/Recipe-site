<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dateStamp: this.getDateStamp()
            }
    },
    methods: {
        getDateStamp() {
            const date = new Date();
            const dateStamp = date.toISOString().split('T')[0];

            return dateStamp;
        }
    }

}
</script>

<style lang="scss" scoped></style>