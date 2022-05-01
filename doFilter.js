import { parse } from "https://deno.land/std@0.137.0/encoding/_yaml/parse.ts"
import { stringify } from "https://deno.land/std@0.137.0/encoding/_yaml/stringify.ts"

const content = await Deno.readTextFile("./clash.yml")

const conf = parse(content)
conf.proxies = conf.proxies.filter(it => it.name.match(new RegExp(Deno.args[0])))

for(let i = 0; i < conf.proxies.length ; i++){
    conf.proxies[i]['skip-cert-verify'] = true
    conf.proxies[i].name = `${i}`
}

await Deno.writeTextFile("./clash_filtered.yml", stringify(conf))