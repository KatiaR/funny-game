export default `

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade calculator-field" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Enter the result of the calculation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body arithmetic-example">
        <div class="first-number"></div>
        <div class="arithmetic-operator"></div>
        <div class="second-number"></div>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Your result" aria-label="Your result" aria-describedby="button-addon2">
  
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Save changes</button>
        
      </div>
    </div>
  </div>
</div>

     
`;
