!function(t) {
    function n(t) {
        return String(t).replace(/["<>& ']/g, function(t) {
            return "&" + s[t] + ";"
        })
    }
    function e(t) {
        return /^.*#\{[^}]*\}.*$/.test(t) ? !0 : /^[ \t]*[&=:|].*$/.test(t) ? !0 : /^[ \w\t_$]*([^&\^?|\n\w\/'"{}\[\]+\-():;,!` \t=\.$_]|:\/\/).*$/.test(t) ? !0 : /^\s*[`\-+'"]{3,}/.test(t) ? !0 : /^(?!\s*(else|do|try|finally|void|typeof\s[\w$_]*)\s*$)[^'"`!:;{}()\[\],\n|=&\/^?]+$/.test(t) ? !0 : !1
    }
    function u(t) {
        if (!t)
            return function() {
                return ""
            }
            ;
        var n = String(t).split(/\n\r?/).map(function(t, n, u) {
            if (/^\s*$/.test(t))
                return t;
            if (e(t)) {
                var i = []
                  , r = 0;
                t.replace(/(!?#)\{((?:"(?:[^\\"]|(?:\\.))*"|'(?:[^\\']|(?:\\.))*'|(?:[^{}]*\{[^}]*\})?|[^}]*)*)\}/g, function(n, e, u, s) {
                    var f = t.slice(r, s);
                    if (f && i.push(JSON.stringify(f)),
                    r = s + n.length,
                    u)
                        switch (/^[a-z$][\w$]+$/i.test(u) && !/^(true|false|NaN|null|this)$/.test(u) && (u = "typeof " + u + "==='undefined'?'':" + u),
                        e) {
                        case "#":
                            i.push("_encode_(" + u + ")");
                            break;
                        case "!#":
                            i.push("(" + u + ")")
                        }
                });
                var s = t.slice(r, t.length);
                return s && i.push(JSON.stringify(s)),
                n < u.length - 1 && i.push('"\\n"'),
                "_output_.push(" + i + ");"
            }
            return t
        });
        return n.unshift("with(this){"),
        n.push("}"),
        new Function("_output_","_encode_","helper",n.join("\n"))
    }
    function i(t, e, i) {
        "function" == typeof t && (t = String(t).replace(/[^]*\/\*!?\s*|\s*\*\/[^]*/g, ""));
        var r = u(t)
          , s = function(t, e) {
            var u = [];
            return "undefined" == typeof e && (e = function(t) {
                r.call(t, u, n, e)
            }
            ),
            r.call(t, u, n, e),
            u.join("")
        };
        return arguments.length <= 1 ? s : s(e, i)
    }
    var r = r || {}
      , s = {
        '"': "#34",
        "'": "#39",
        "<": "lt",
        ">": "gt",
        "&": "amp",
        " ": "nbsp"
    };
    r.isOutput = e,
    r.build = u,
    r.render = i,
    "function" == typeof define ? (define.amd || define.cmd) && define(function() {
        return r
    }) : "undefined" != typeof module && module.exports ? module.exports = r : window[t] = r
}("jhtmls");
