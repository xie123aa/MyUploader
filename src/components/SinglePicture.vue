<template>
  <div>
    asdsadsa
<!--    style="width: 100px; height: 100px"-->

    <el-image
      :src="server_config.url+'/File/download/'+fileId"
      :preview-src-list="fileUrl">
    </el-image>
  </div>
</template>
<script>
export default {
  name: "SinglePicture",
  data() {
    return {
      server_config: this.global.server_config,
      files: [],
      images: [],
      fileUrl:[],
      changed: false,
      fileId:""
    }
  },
  created() {
    this.initPicture();
  },

  methods:{
    initPicture(){
      console.log(this.$route.query.fileId);
      //获取图片
      this.fileId=this.$route.query.fileId
      this.axios.get(this.server_config.url+"/File/getFileList").then(response=>{
        this.files = response.data;
        // let file = files.find(x=>x.id =fileId);
        this.fileUrl=this.files.map(e=>this.server_config.url+'/File/download/'+e.id)
        console.log(this.fileUrl)
        // console.log(file);
        console.log(response.data)
      }).catch(err=>{
        console.log(err);
      });
    }
  }
}
</script>
<style>
</style>
