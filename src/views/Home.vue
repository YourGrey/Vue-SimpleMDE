<template>
  <div class="home">
    <MyEditor />
  </div>
</template>

<script>
// @ is an alias to /src
import MyEditor from '@/components/MyEditor.vue'

export default {
  name: 'Home',
  components: {
    MyEditor
  }
}
</script>
