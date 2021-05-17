$.get("./../data/data.txt", function (data) {
  data = data.split(/\n\s*\n/);
  console.log(data.length);
  const container = $(".list-group");

  const amount = 2;

  let counter = 0;

  data.slice(counter, amount).map((record, index) => {
    const [title, author, date, description, number] = record.split("\n");

    $(`<li class="card mb-20" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-author mb-2 text-muted">${author}</h6>
              <h6 class="card-date mb-2 text-muted">${date}</h6>
            </div>

            <div class="card-header" id="heading${number}">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapse${number}"
                  aria-expanded="false"
                  aria-controls="collapse${number}"
                >
                  Опис
                </button>
              </h5>
            </div>
            <div
              id="collapse${number}"
              class="collapse"
              aria-labelledby="heading${number}"
              data-parent="#accordion"
            >
              <div class="card-body">
                ${description}
              </div>
            </div>
          </li>`).appendTo(container);
  });

  if (data.length > amount) {
    const body = $("body");
    $(
      '<div class="container"><div class="col-md-12 text-center"><button type="button" class="btn btn-primary more">Більше</button></div> </div>'
    ).appendTo(body);
  }

  //   const btn = $(".more");
  $(".more").click(function () {
    console.log("clieck");
    counter += amount;
    console.log(counter, amount);
    data.slice(counter, counter + amount).map((record, index) => {
      const [title, author, date, description, number] = record.split("\n");
      console.log(`heading${index}`);

      $(`<li class="card mb-20" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-author mb-2 text-muted">${author}</h6>
              <h6 class="card-date mb-2 text-muted">${date}</h6>
            </div>

            <div class="card-header" id="heading${number}">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapse${number}"
                  aria-expanded="false"
                  aria-controls="collapse${number}"
                >
                  Опис
                </button>
              </h5>
            </div>
            <div
              id="collapse${number}"
              class="collapse"
              aria-labelledby="heading${number}"
              data-parent="#accordion"
            >
              <div class="card-body">
                ${description}
              </div>
            </div>
          </li>`).appendTo(container);
    });
  });
});
