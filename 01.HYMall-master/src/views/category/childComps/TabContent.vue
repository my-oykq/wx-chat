<template>
</template>

<script>

	export default {
    // 右边
		name: "TabContent",
    components: {
		  Scroll,
      TabContentCategory,
      TabContentDetail
    },
    props: {
      subcategories: {
        type: Object,
        default() {
          return {}
        }
      },
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style scoped>
</style>
