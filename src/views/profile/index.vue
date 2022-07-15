<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24" />

        <el-col :span="18" :xs="24">
          <el-card />
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
  },
  methods: {
  }
}
</script>
