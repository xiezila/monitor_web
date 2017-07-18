var schema = {
    "$schema": "",
    "type": "object",
    "properties": {
        "connection": {
            "type": "object",
            "title": "报警连接",
            "properties": {
                "ip": {
                    "type": "string", 
                    "default": "192.168.1.1",
                    "required": true
                },
                "port": {
                    "type": "integer", 
                    "default": 1080,
                    "required": true
                }
            }
        },
        "function": {
            "type": "array",
            "title": "功能码限制",
            "maxItems": 20,
            "uniqueItems": true,
            "items": {
                "description": "单个功能码",
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "title": "功能码",
                        "description": "Indexed field name",
                        "required": true,
                        "default": 1,
                        "enum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                    },
                    "default_": {
                        "type": "boolean",
                        "title": "默认打开",
                        "default": true
                    },
                    "excepts": {
                        "type": "array",
                        "title": "例外情况",
                        "items": {
                            "type": "object",
                            "properties": {
                                "start": {
                                    "type": "string",
                                    "title": "开始时间"
                                },
                                "end": {
                                    "type": "string",
                                    "title": "结束时间"
                                },
                                "excepts": {
                                    "type": "array",
                                    "title": "例外情况",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "start": {
                                                "type": "string",
                                                "title": "开始时间"
                                            },
                                            "end": {
                                                "type": "string",
                                                "title": "结束时间"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "memory": {
            "type": "array",
            "title": "内存限制",
            "maxItems": 4,
            "uniqueItems": true,
            "items": {
                "description": "内存类型",
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "title": "内存类型",
                        "description": "Indexed field name",
                        "required": true,
                        "default": 1,
                        "enum": [0,1,2,3,4]
                    },
                    "default_": {
                        "type": "boolean",
                        "title": "默认打开",
                        "default": true
                    },
                    "excepts": {
                        "type": "array",
                        "title": "例外情况",
                        "items": {
                            "type": "object",
                            "properties": {
                                "start": {
                                    "type": "integer",
                                    "title": "开始地址"
                                },
                                "end": {
                                    "type": "integer",
                                    "title": "结束地址(包含)"
                                },
                                "excepts": {
                                    "type": "array",
                                    "title": "例外情况",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "start": {
                                                "type": "integer",
                                                "title": "开始地址"
                                            },
                                            "end": {
                                                "type": "integer",
                                                "title": "结束地址(包含)"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
