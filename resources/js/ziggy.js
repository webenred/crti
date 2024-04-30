const Ziggy = {"url":"http:\/\/localhost:8001","port":8001,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"api.auth.check.user":{"uri":"api\/v1\/auth\/check-user","methods":["POST"]},"api.auth.register":{"uri":"api\/v1\/auth\/register","methods":["POST"]},"api.auth.login":{"uri":"api\/v1\/auth\/login","methods":["POST"]},"api.auth.logout":{"uri":"api\/v1\/auth\/logout","methods":["POST"]},"api.auth.device.index":{"uri":"api\/v1\/auth\/tokens","methods":["GET","HEAD"]},"api.auth.device.destroy.all":{"uri":"api\/v1\/auth\/tokens\/destroy-all","methods":["DELETE"]},"api.auth.device.destroy":{"uri":"api\/v1\/auth\/tokens\/{id}","methods":["DELETE"],"parameters":["id"]},"register":{"uri":"register","methods":["GET","HEAD"]},"register.store":{"uri":"register","methods":["POST"]},"login":{"uri":"login","methods":["GET","HEAD"]},"login.store":{"uri":"login","methods":["POST"]},"logout.destroy":{"uri":"logout","methods":["DELETE"]},"api.permission.index":{"uri":"api\/v1\/permission","methods":["GET","HEAD"]},"api.permission.store":{"uri":"api\/v1\/permission","methods":["POST"]},"api.permission.show":{"uri":"api\/v1\/permission\/{permission}","methods":["GET","HEAD"],"parameters":["permission"],"bindings":{"permission":"id"}},"api.permission.update":{"uri":"api\/v1\/permission\/{permission}","methods":["PUT","PATCH"],"parameters":["permission"],"bindings":{"permission":"id"}},"api.permission.destroy":{"uri":"api\/v1\/permission\/{permission}","methods":["DELETE"],"parameters":["permission"],"bindings":{"permission":"id"}},"api.role.index":{"uri":"api\/v1\/role","methods":["GET","HEAD"]},"api.role.store":{"uri":"api\/v1\/role","methods":["POST"]},"api.role.show":{"uri":"api\/v1\/role\/{role}","methods":["GET","HEAD"],"parameters":["role"],"bindings":{"role":"id"}},"api.role.update":{"uri":"api\/v1\/role\/{role}","methods":["PUT","PATCH"],"parameters":["role"],"bindings":{"role":"id"}},"api.role.destroy":{"uri":"api\/v1\/role\/{role}","methods":["DELETE"],"parameters":["role"],"bindings":{"role":"id"}}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
