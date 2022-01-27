<template>
  <div>
    <template>
      <el-table
          :data="fileList"
          stripe
          style="width: 100%">
        <el-table-column
            prop="name"
            label="文件名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="path"
            label="下载路径"
            width="200">
        </el-table-column>
        <el-table-column
            prop="uploadTime"
            label="上传时间">
        </el-table-column>
        <el-table-column
          label="图片预览">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="server_config.url+'/File/downloadThumb/'+scope.row.id"  @click="goDetail(scope.row.id)">
<!--              :preview-src-list="server_config.url+'/File/download/'+scope.row.id">-->
            </el-image>
<!--            <img width="120px" height="120px" :src="server_config.url+'/File/downloadThumb/'+scope.row.id" class="image"-->
<!--                 @click="goDetail(scope.row.id)">-->
          </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
            <el-button @click="deletePic(scope.row)"  type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="onCurrentChange"
        :current-page.sync="page"
        :page-size="pageSize"
        :page-sizes="[5, 10, 20, 50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </template>
  </div>
</template>
<script>
 export default {
   name: "FileDownload",
   data() {
     return{
       server_config: this.global.server_config,
       name:"",
       fileList:[],
       page: 1,
       pageSize: 5,
       total: 0
     }},
   methods:{
     handleClick(row) {
       window.open(this.server_config.url+"/File/download/"+row.id)
     },
     deletePic(row) {
       let _this=this;
       this.axios.get(this.server_config.url+"/File/delete/"+row.id).then(function(response){
         console.log(response.data);
         _this.$message.success('删除成功');
       }).catch(function(err){
         console.log(err);
       });
     },
     onCurrentChange(page) {
       let _this = this;
       this.axios.get(this.server_config.url+"/File/getPage?pageNum="+this.page+'&pageSize='+this.pageSize).then(function(response){
         _this.fileList = response.data.list;
         _this.total=response.data.total;
       }).catch(function(err){
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
   mounted(){
     this.onCurrentChange();
   },
 }
</script>
<style>

</style>
