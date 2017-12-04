module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "基于ZCF的项目"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "filters": {
  },
  "completeMessage": "开始你的项目：\n\n  cd ./{{destDirName}}/server\n  npm install\n  npm run dev\n  cd ../client\n  npm install\n  npm run dev"
};
