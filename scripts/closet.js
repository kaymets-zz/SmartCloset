/// <reference path="scripts/jquery-1.11.1.js" />
(function () {
    /// <reference path="scripts/jquery-1.11.1.js" />
    var clothes,
        rows_basics = [],
        rows_wear = [],
        clothesURI = "data/clothes.json";

    var compare = {
        name: function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        date: function (a, b) {
            a = a == "Never" ? "1/1/1000" : a;
            b = b == "Never" ? "1/1/1000" : b;

            a = new Date(a);
            b = new Date(b);
            return a - b;
        },
        number: function (a, b) {
            return a - b;
        }
    };

    var getColors = function (colorsList) {
        var colors = colorsList.split(',');
        var colorBlocks = "";

        for (i in colors) {
            colorBlocks += "<div class='colorBlock' style='background-color: " + colors[i] + ";'></div>";
        }

        return colorBlocks;
    };

    function makeRows() {
        clothes.forEach(function (item) {
            var $row_basic = $('<tr></tr>');
            $row_basic.append($('<td></td>').text(item.Name));
            $row_basic.append($('<td></td>').text(item.Brand));
            $row_basic.append($('<td></td>').text(item.Type));
            $row_basic.append($('<td></td>').append(getColors(item.Color)));
            $row_basic.append($('<td></td>').text(item.LastWorn == "0" ? "Never" : item.LastWorn));
            $row_basic.append($('<td></td>').text(item.Dirty == "y" ? "Yes" : "No"));

            $row_basic.on('click', function () {
                var $tr = $(this);
                var expandedDetails = $('#expanded-details-row');

                if ($tr.is('.selected-item-row')) {
                    $tr.removeClass('selected-item-row');
                    expandedDetails.hide();
                } else {
                    $tr.siblings().removeClass('selected-item-row');
                    $tr.addClass('selected-item-row');
                    $tr.after(expandedDetails);
                    //TODO: Update the row with the info for the item that was clicked
                    expandedDetails.show();
                }
            });

            var $row_wear = $('<tr></tr>');
            $row_wear.append($('<td></td>').text(item.Name));
            $row_wear.append($('<td></td>').text(item.Brand));
            $row_wear.append($('<td></td>').text(item.Type));
            $row_wear.append($('<td></td>').text(item.Purchased == "0" ? "Never" : item.Purchased));
            $row_wear.append($('<td></td>').text(item.Cost));
            $row_wear.append($('<td></td>').text(item.TimesWorn));

            $row_wear.on('click', function () {
                var $tr = $(this);
                var expandedDetails = $('#expanded-details-row');

                if ($tr.is('.selected-item-row')) {
                    $tr.removeClass('selected-item-row');
                    expandedDetails.hide();
                } else {
                    $tr.siblings().removeClass('selected-item-row');
                    $tr.addClass('selected-item-row');
                    $tr.after(expandedDetails);
                    //TODO: Update the row with the info for the item that was clicked
                    expandedDetails.show();
                }
            });

            rows_basics.push({
                item: item,
                $element: $row_basic
            });

            rows_wear.push({
                item: item,
                $element: $row_wear
            });
        });
    }

    function appendRows(table, rows) {
        var $table = table;
        var $tbody = $table.find('tbody');

        rows.forEach(function (row) {
            $tbody.append(row.$element);
        });
    }

    function updateFilter() {

    }

    function init() {
        //$table = $('#clothing-basics'),
        //$tbody = $table.find('tbody');
        $.getJSON(clothesURI)
            .done(function (data) {
                clothes = data;
                makeRows();
                appendRows($('#clothing-basics'), rows_basics);
                appendRows($('#clothing-wear'), rows_wear);
            });

        var $thSort = $('.sortable');
        $thSort.on('click', function () {
            var $th = $(this);
            //$table = $('#clothing'),
            $table = $th.parents('table');
            $tbody = $table.find('tbody');
            var rows = $table.is('#clothing-basics') ? rows_basics : rows_wear;
            var siblings = $th.siblings('.sortable');
            var sortType = $th.data('sort');
            var column;

            $table.find('.selected-item-row').removeClass('selected-item-row');
            $table.find('#expanded-details-row').hide();

            if ($th.is('.asc') || $th.is('.desc')) {
                $th.toggleClass('asc desc');
                $th.find('i').toggleClass('fa-sort-asc fa-sort-desc');
                rows.reverse();
                appendRows($table, rows);
            } else {
                $th.addClass('asc');
                $th.find('i').removeClass('fa-sort');
                $th.find('i').addClass('fa-sort-asc headerIconSelected');
                siblings.removeClass('asc desc');
                siblings.find('i').removeClass('fa-sort-asc fa-sort-desc headerIconSelected');
                siblings.find('i').addClass('fa-sort');
                column = $table.find('th').index(this);
                rows.sort(function (a, b) {
                    a = a.$element.find('td').eq(column).text();
                    b = b.$element.find('td').eq(column).text();
                    return compare[sortType](a, b);
                });
                appendRows($table, rows);
            }
        });

        $('#btn-add-item').on('click', function () {
            $button = $(this);

            if ($button.is('.active-action')) {
                $button.removeClass('active-action');
                $('#filter-item-ui').show();
                $('#add-item-ui').hide();
            } else {
                $button.addClass('active-action');
                $('#filter-item-ui').hide();
                $('#add-item-ui').show();
            }
        });

        $('.btn-clothing-option').on('click', function () {
            $button = $(this);

            if ($button.is('.active-btn-clothing-option')) {
                $button.removeClass('active-btn-clothing-option');
            } else {
                $button.addClass('active-btn-clothing-option');
            }
        });
    }

    $(init);
}());