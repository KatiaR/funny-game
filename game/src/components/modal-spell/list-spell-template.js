export default `
<div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Select a spell</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class = "setting">
      <div class = "type">
      <h6>Spell type</h6>
      <button type="button" class="btn" data-toggle="button" aria-pressed="false" autocomplete="off">
  Blue fire
</button>
<button type="button" class="btn" data-toggle="button" aria-pressed="false" autocomplete="off">
 Red fire
</button>
</div>
      <div class = "option">
     <h6>Spell option</h6>
     
      <button type="button" class="btn btn-treat" data-toggle="button" aria-pressed="false" autocomplete="off">
 Treat
</button>
<button type="button" class="btn" data-toggle="button" aria-pressed="false" autocomplete="off">
 Damage
</button> 
</div>
     

</div>
      <div class="modal-body btn-spell">
      <button type="button" id = "arithmetic-task" class="btn btn-outline-primary type-spell">Arithmetic task</button>
      <button type="button" id = "vocabularyEnToRus-task" class="btn btn-outline-primary type-spell">Translation en-ru</button>
      <button type="button" id = "sorting-task"  class="btn btn-outline-primary type-spell">Sorting task</button>
      <button type="button" id = "compare-task"  class="btn btn-outline-primary type-spell">Compare task</button>
      <button type="button" id = "vocabularyRuToEn-task"  class="btn btn-outline-primary type-spell">Translation ru-en</button>
      <button type="button" id = "extraWord-task"  class="btn btn-outline-primary type-spell">Extra words</button>
      <button type="button" id = "capital"  class="btn btn-outline-primary type-spell">Capitals task</button>
      <button type="button" id = "sequence"  class="btn btn-outline-primary type-spell">Sequence task</button>
      <button type="button" id = "education"  class="btn btn-outline-primary type-spell">General education</button>
      <button type="button" id = "figures"  class="btn btn-outline-primary type-spell">Concepts task</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id = "save" data-dismiss="modal">Save changes</button>
      </div>
`;
