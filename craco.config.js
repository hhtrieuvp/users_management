const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, // Ví dụ: Tùy chỉnh màu sắc chủ đạo
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

