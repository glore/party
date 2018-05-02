import wepy from 'wepy';

export default class ShareMessage extends wepy.mixin {
  data = {
    formId: []
  };
  onLoad(e) {

  }
  onShow(e) {

  }
  methods = {
    formSubmit(e) {
      this.formId.push(e.detail.formId)
      console.log(this.formId)
    }
  }
}
