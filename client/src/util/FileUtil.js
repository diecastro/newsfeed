const getBase64 = (blob) => {
  /* istanbul ignore next */
  return new Promise(
    (resolve, reject) => {
      let response = {
        base64: null
      };
      let reader = new FileReader();
      reader.onloadend = () => {
        response.base64 = reader.result;
        resolve(response);
      };

      reader.onerror = () => {
        reject(response);
      };

      reader.readAsDataURL(blob);
    });
};

const FileUtil = {
  getBase64
};

export default FileUtil;