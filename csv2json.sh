
export sep=''
for csv in "$@"
do
  python -c "import csv,json;print '${sep}\"${csv}\" : '+json.dumps(list(csv.DictReader(open('${csv}'))))"
  sep=,
done

