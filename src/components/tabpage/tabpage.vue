<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="border-card"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.id"
        :label="item.title"
        :name="item.id"
        :closable="item.closeable"
      >
        <v-info-board :queryObj="item.queryObj"></v-info-board>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
</style>

<script>
import bus from "../common/bus";
import vInfoBoard from "../tablepage/travelinfoboard.vue";
export default {
  name: "tabpage",
  components: {
    vInfoBoard,
  },
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          closeable: false,
          id: "1",
          title: "Travel Info",
          queryObj: null
        },
      ]
    };
  },
  methods: {
    removeTab(targetId) {
      let tabs = this.editableTabs;
      let activeId = this.editableTabsValue;
      if (activeId === targetId) {
        tabs.forEach((tab, index) => {
          if (tab.id === targetId) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeId = nextTab.id;
            }
            this.isTip = false;
            this.editableTabsValue = activeId;
          }
        });
      }

      this.editableTabs = tabs.filter((tab) => tab.id !== targetId);
    },
  },
  created() {
    bus.$on("new_search_request", (msg) => {
      var startCond, endCond, type;
      switch (msg.searchType) {
        case "birthYear":
          startCond = msg.startBirthYear;
          endCond = msg.endBirthYear;
          type = "出生年份";
          break;
        case "totalMile":
          startCond = msg.startMile;
          endCond = msg.endMile;
          type = "总旅行里程";
          break;
        case "totalTime":
          startCond = msg.startTime;
          endCond = msg.endTime;
          type = "总旅行时间";
          break;
      }

      let newId = Date.now().toString(36);
      this.editableTabs.push({
        closeable: true,
        id: newId,
        title: type + ": " + startCond + " - " + endCond,
        queryObj: msg
      });
      this.editableTabsValue = newId;
    });
  },
};
</script>
