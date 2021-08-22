<template>
  <div class="container messageboard">
    <!-- 查询区----start -->
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidth"
      :inline="true"
      ref="formSearch"
      :model="formSearch"
      class="demo-form-inline"
    >
      <el-form-item label="搜索条件">
        <el-select v-model="formSearch.searchType.value" placeholder="请选择">
          <el-option
            v-for="item in formSearch.searchType.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="出生年份"
        v-show="formSearch.searchType.value == 'birthYear'"
      >
        <el-col :span="10">
          <el-input
            v-model="formSearch.startBirthYear"
            placeholder=""
          ></el-input>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="10">
          <el-input v-model="formSearch.endBirthYear" placeholder=""></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        label="总旅行里程"
        v-show="formSearch.searchType.value == 'totalMile'"
      >
        <el-col :span="10">
          <el-input v-model="formSearch.startMile" placeholder=""></el-input>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="10">
          <el-input v-model="formSearch.endMile" placeholder=""></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        label="总旅行时间"
        v-show="formSearch.searchType.value == 'totalTime'"
      >
        <el-col :span="10">
          <el-input v-model="formSearch.startTime" placeholder=""></el-input>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="10">
          <el-input v-model="formSearch.endTime" placeholder=""></el-input>
        </el-col>
      </el-form-item>

      <br />
      <el-form-item label=" " style="margin-left: 0px">
        <el-button type="primary" @click="onSearch">查询</el-button>
        <!-- <el-button type="warning" plain @click="onReset">重置</el-button> -->
      </el-form-item>
    </el-form>

    <!-- 查询区----end -->
    <!-- 操作区----start -->
    <el-row class="mgb15">
      <el-button size="small" round type="primary" @click="handleAdd"
        >新增</el-button
      >
      <el-button size="small" round type="danger" @click="deleteMany"
        >批量删除</el-button
      >
    </el-row>
    <!-- 操作区----end -->
    <!-- 表格---start -->

    <el-table
      :data="tableData"
      v-loading="listLoading"
      border
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="60"> </el-table-column>

      <el-table-column
        prop="id"
        label="人员ID"
        width="150"
        align="center"
        sortable
      >
      </el-table-column>

      <el-table-column prop="gender" label="性别" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.gender == 1 ? "男" : "女" }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="birthYear"
        label="出生年份"
        width="150"
        align="center"
        sortable
      >
      </el-table-column>

      <el-table-column
        prop="totalMile"
        label="总旅行里程"
        align="center"
        width="100"
      >
      </el-table-column>

      <el-table-column
        prop="totalTime"
        label="总旅行时间"
        align="center"
        width="100"
      >
      </el-table-column>

      <el-table-column label="操作" fixed="right" min-width="230">
        <template slot-scope="scope">
          <el-button
            size="mini"
            plain
            type="primary"
            @click="handleDetail(scope.$index, scope.row)"
            >详情</el-button
          >
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            plain
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,sizes,prev, pager, next,jumper"
      :current-page="pageInfo.currentPage"
      :page-size="pageInfo.pageSize"
      :total="pageInfo.pageTotal"
      :page-sizes="[10, 20]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <!-- 表格---end -->

    <!-- 编辑弹框---start -->
    <el-dialog
      :title="formEditTitle"
      :visible.sync="dialogEdittVisible"
      width="800px"
      @close="closeDialog('formEdit')"
    >
      <el-form
        :label-position="labelPosition"
        :label-width="labelWidth"
        :rules="rulesEdit"
        :disabled="formEditDisabled"
        :inline="true"
        ref="formEdit"
        :model="formEdit"
        class="demo-form-inline"
      >
        <el-form-item label="人员ID" prop="id">
          <el-input
            v-model="formEdit.id"
            :disabled="dialogType == 'edit'"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="formEdit.gender">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生年份" prop="birthYear">
          <el-input v-model="formEdit.birthYear"></el-input>
        </el-form-item>
        <el-form-item label="总旅行里程" prop="totalMile">
          <el-input v-model="formEdit.totalMile"></el-input>
        </el-form-item>
        <el-form-item label="总旅行时间" prop="totalTime">
          <el-input v-model="formEdit.totalTime"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEdittVisible = false">取 消</el-button>
        <el-button v-if="!formEditDisabled" type="primary" @click="handleSave"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!-- 编辑弹框---end -->
  </div>
</template>

<style lang="scss">
.messageboard {
  // 设置输入框的宽度
  .el-form-item__content {
    width: 220px;
  }
}
</style>

<script>
import apis from "../../apis/apis";
export default {
  name: "messageboard",
  data() {
    return {
      listLoading: false,
      pageInfo: {
        currentPage: 1,
        pageSize: 20,
        pageTotal: 0,
      },
      formSearch: {
        startBirthYear: null,
        endBirthYear: null,
        startMile: null,
        endMile: null,
        startTime: null,
        endTime: null,

        searchType: {
          options: [
            {
              value: "birthYear",
              label: "出生年份",
            },
            {
              value: "totalMile",
              label: "总旅行里程",
            },
            {
              value: "totalTime",
              label: "总旅行时间",
            },
          ],
          value: "birthYear",
        },
      },
      formEdit: {
        id: null,
        gender: null,
        birthYear: null,
        totalMile: null,
        totalTime: null,
      },
      rulesEdit: {
        id: [
          { required: true, message: "请输入ID", trigger: "blur" },
          //   { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" },
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthYear: [
          { required: true, message: "请输入出生年份", trigger: "change" },
        ],
        totalMile: [
          { required: true, message: "请输入总旅行里程", trigger: "change" },
        ],
        totalTime: [
          { required: true, message: "请输入总旅行时间", trigger: "change" },
        ],
      },
      formEditTitle: "编辑", //新增，编辑和查看标题
      formEditDisabled: false, //编辑弹窗是否可编辑
      dialogEdittVisible: false, //编辑弹框显示
      dialogType: "", //弹框类型：add,edit,show
      tableData: [],
      labelPosition: "left", //lable对齐方式
      labelWidth: "100px", //lable宽度
      formLabelWidth: "220px",
      multipleSelection: [],
    };
  },
  computed: {},
  filters: {
    convertType: function (type) {
      if (type == 1) {
        return "留言";
      } else if (type == 2) {
        return "建议";
      } else if (type == 3) {
        return "BUG";
      }
    },
  },
  mounted() {
    this.onRefreshData();
  },
  methods: {
    /**
     * 查询列表
     */
    onRefreshData() {
      this.listLoading = true;

      let param = Object.assign({}, this.pageInfo);
      apis.msgApi
        .getList(param)
        .then((data) => {
          this.listLoading = false;
          console.info(data);
          if (data && data.data) {
            var json = data.data;
            this.pageInfo.pageTotal = json.totalElements;
            this.tableData = json.content;
          }
        })
        .catch((err) => {
          this.listLoading = false;
          this.$message({ message: "查询异常，请重试", type: "error" });
        });
    },

    onSearch() {
      this.listLoading = true;

      let param = Object.assign({}, this.pageInfo);

      let searchType = this.formSearch.searchType.value;
      if (searchType == "birthYear") {
        param.startBirthYear = this.formSearch.startBirthYear;
        param.endBirthYear = this.formSearch.endBirthYear;
      } else if (searchType == "totalTime") {
        param.startTime = this.formSearch.startTime;
        param.endTime = this.formSearch.endTime;
      } else if (searchType == "totalMile") {
        param.startMile = this.formSearch.startMile;
        param.endMile = this.formSearch.endMile;
      }

      apis.msgApi
        .getList(param)
        .then((data) => {
          this.listLoading = false;
          console.info(data);
          if (data && data.data) {
            var json = data.data;
            this.pageInfo.pageTotal = json.totalElements;
            this.tableData = json.content;
          }
        })
        .catch((err) => {
          this.listLoading = false;
          this.$message({ message: "查询异常，请重试", type: "error" });
        });
    },

    handleSave() {
      if (this.dialogType == "add") {
        this.save();
      } else if (this.dialogType == "edit") {
        this.update();
      } else {
        this.$message({ message: "操作异常", type: "error" });
      }
    },
    /**
     * 保存
     */
    save() {
      this.$refs["formEdit"].validate((valid) => {
        if (valid) {
          let param = Object.assign({}, this.formEdit);
          apis.msgApi
            .add(param)
            .then((data) => {
              if (data && data.data) {
                this.$message({ message: "执行成功", type: "success" });
                this.dialogEdittVisible = false;
                this.onRefreshData();
                return;
              }
              this.$message({ message: "执行失败，请重试", type: "error" });
            })
            .catch((err) => {
              this.$message({ message: "执行失败，请重试", type: "error" });
            });
        }
      });
    },
    /**
     * 更新
     */
    update() {
      this.$refs["formEdit"].validate((valid) => {
        if (valid) {
          let param = Object.assign({}, this.formEdit);
          apis.msgApi
            .update(param)
            .then((data) => {
              if (data && data.data) {
                this.$message({ message: "执行成功", type: "success" });
                this.dialogEdittVisible = false;
                this.onRefreshData();
                return;
              }
              this.$message({ message: "执行失败，请重试", type: "error" });
            })
            .catch((err) => {
              this.$message({ message: "执行失败，请重试", type: "error" });
            });
        }
      });
    },
    /**
     * 删除
     */
    handleDelete(index, rowData) {
      if (rowData.name == "使用文档") {
        this.$message("使用文档不可删除");
        return;
      }
      var id = rowData.id;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          apis.msgApi
            .delete({ id: id })
            .then((data) => {
              debugger;
              this.onRefreshData();
            })
            .catch((err) => {
              debugger;
              this.$message({ message: "执行失败，请重试", type: "error" });
            });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    /**
     * 批量删除
     */
    deleteMany() {
      var ids = this.multipleSelection.map((item) => item.id);
      if (ids.length == 0) {
        this.$message({ message: "请选择要删除的项", type: "warn" });
        return;
      }
      debugger;
      this.$confirm("此操作将批量永久删除文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          apis.msgApi
            .deleteBatch({ ids: ids })
            .then((data) => {
              this.$common.isSuccess(data, () => {
                debugger;
                this.onRefreshData();
              });
            })
            .catch((err) => {
              debugger;
              this.$message({ message: "执行失败，请重试", type: "error" });
            });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    onReset() {
      this.$refs["formSearch"].resetFields();
    },
    /**
     * 打开编辑弹窗
     */
    handleAdd() {
      this.dialogEdittVisible = true;
      this.$nextTick(() => {
        this.dialogType = "add";
        this.formEditTitle = "新增";
        this.formEditDisabled = false;
      });
    },
    /**
     * 打开编辑弹窗
     */
    handleEdit(index, rowData) {
      //var msg = "索引是:" + index + ",行内容是:" + JSON.stringify(rowData);
      //this.$message({message: msg,type: "success"});
      this.dialogEdittVisible = true; //等dom渲染完，读取data中初始值，然后再复制，这样重置的是data中初始值
      this.$nextTick(() => {
        this.dialogType = "edit";
        this.formEditTitle = "编辑";
        this.formEditDisabled = false;
        this.formEdit = Object.assign({}, rowData);
        this.formEdit.gender += ""; //必须转换成字符串才能回显
      });
    },
    /**
     * 打开详情页
     */
    handleDetail(index, rowData) {
      this.dialogEdittVisible = true;
      this.$nextTick(() => {
        this.dialogType = "show";
        this.formEditTitle = "详情";
        this.formEditDisabled = true;
        this.formEdit = Object.assign({}, rowData);
        this.formEdit.gender += "";
      });
    },
    /**
     * 关闭弹框，数据重置
     */
    closeDialog(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 分页大小切换
     */
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.onRefreshData();
    },
    /**
     * 分页切换
     */
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val;
      this.onRefreshData();
    },
    /**
     * 点击选择
     */
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // this.$message({
      //     message: '选中的项是:' + JSON.stringify(this.multipleSelection),
      //     type: "success"
      // });
    },
    /**
     * 打开详情页
     */
    openDetail(row) {
      this.$common.OpenNewPage(this, "detail", row);
    },
  },
};
</script>
