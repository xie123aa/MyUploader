<template>
  <div>
    <template>
      <div class="demo-image">
      <span class="block" v-for="item in picList">
        <span style="border: white;width:320px">
        <el-image :src="server_config.url+'/File/downloadThumb/'+item.id"
                  @click="goDetail(item.id)"
                  style="width: 300px; height: 300px;border-radius: 30px;
                  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
                  :fit="'contain'" ></el-image>
          </span>
      </span>
        <span class="block" v-for="item in videoList">
        <video width="320" height="240" controls>
          <source :src="server_config.url+'/File/download/'+item.id" type="video/mp4">
          <source src="/File/download/15" type="video/ogg">
    </video>
        </span>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="onCurrentChange"
        :current-page.sync="page"
        :page-size="pageSize"
        :page-sizes="[10, 20, 30, 50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </template>
  </div>
</template>
<script>
export default {
  name: "FileBrowser",
  data() {
    return {
      server_config: this.global.server_config,
      name: "",
      fileList: [],
      picList: [],
      videoList: [],
      page: 1,
      pageSize: 10,
      total: 0
    }
  },
  methods: {
    handleClick(row) {
      window.open(this.server_config.url + "/File/download/" + row.id)
    },

    onCurrentChange(page) {
      this.axios.get(this.server_config.url + "/File/getPage?pageNum=" + this.page + '&pageSize=' + this.pageSize).then(response => {
        this.fileList = response.data.list;
        this.total = response.data.total;
        this.picList = this.fileList.filter(e => {
          var index = e.name.lastIndexOf(".");
          var ext = e.name.substr(index + 1);
          const imgList = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
          if (imgList.indexOf(ext) > -1) {
            console.log('是图片');
            return true;
          }
        });
        this.videoList = this.fileList.filter(e => !this.picList.includes(e));
        console.log(this.videoList);

        console.log(this.picList)
      }).catch(err => {
        console.log(err);
      });
    },
    handleSizeChange(currentSize) {
      this.pageSize = currentSize;
      this.onCurrentChange(pageSize);
    },
    goDetail(id) {
      console.log(id)
      this.$router.push({
        path: "/singlePicture",
        query: {fileId: id}
      });
    }

  },
  mounted() {
    this.onCurrentChange();
  },


}
</script>
<style>

</style>
