export default `
<div class="modal calculator-field" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Enter the result of the calculation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="first-number"></div>
        <div class="arithmetic-operator"></div>
        <div class="second-number"></div>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Your result" aria-label="Your result" aria-describedby="button-addon2">
  
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;
