  var add, chunk, current, del, deleted_file, eof, file, files, from_file, index, j, len, line, lines, ln_add, ln_del, new_file, normal, parse, restart, schema, start, to_file;
      ln1: ln_del++,
      ln2: ln_add++,
  eof = function(line) {
    var obj, recentChange, ref;
    ref = current.changes, recentChange = ref[ref.length - 1];
    return current.changes.push((
      obj = {
        type: recentChange.type
      },
      obj["" + recentChange.type] = true,
      obj.ln1 = recentChange.ln1,
      obj.ln2 = recentChange.ln2,
      obj.ln = recentChange.ln,
      obj.content = line,
      obj
    ));
  };
  schema = [[/^\s+/, normal], [/^diff\s/, start], [/^new file mode \d+$/, new_file], [/^deleted file mode \d+$/, deleted_file], [/^index\s[\da-zA-Z]+\.\.[\da-zA-Z]+(\s(\d+))?$/, index], [/^---\s/, from_file], [/^\+\+\+\s/, to_file], [/^@@\s+\-(\d+),?(\d+)?\s+\+(\d+),?(\d+)?\s@@/, chunk], [/^-/, del], [/^\+/, add], [/^\\ No newline at end of file$/, eof]];