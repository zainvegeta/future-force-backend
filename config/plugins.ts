export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AKIA3FEKTWN6FR7K6TUB"),
          secretAccessKey: env("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"),
          region: env("ap-south-1"),
          params: {
            Bucket: env("future-force"),
          },
        },
      },
    },
  },
});
