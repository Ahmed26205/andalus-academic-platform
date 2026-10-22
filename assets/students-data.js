// ==============================================================
// ALANDALUS PRIMARY BOYS OFFICIAL ROSTER (340 STUDENTS - 15 CLASSES)
// مدارس الأندلس الأهلية بمكة المكرمة - المرحلة الابتدائية
// ==============================================================

var availableClasses = {
    "3/1": {
        "code": "3/1",
        "grade": "الصف الثالث الابتدائي",
        "label": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "studentCount": 24
    },
    "3/2": {
        "code": "3/2",
        "grade": "الصف الثالث الابتدائي",
        "label": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "studentCount": 27
    },
    "G3": {
        "code": "G3",
        "grade": "الصف الثالث الابتدائي",
        "label": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "studentCount": 22
    },
    "4/1": {
        "code": "4/1",
        "grade": "الصف الرابع الابتدائي",
        "label": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "studentCount": 24
    },
    "4/2": {
        "code": "4/2",
        "grade": "الصف الرابع الابتدائي",
        "label": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "studentCount": 25
    },
    "4/3": {
        "code": "4/3",
        "grade": "الصف الرابع الابتدائي",
        "label": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "studentCount": 24
    },
    "G4": {
        "code": "G4",
        "grade": "الصف الرابع الابتدائي",
        "label": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "studentCount": 26
    },
    "5/1": {
        "code": "5/1",
        "grade": "الصف الخامس الابتدائي",
        "label": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "studentCount": 20
    },
    "5/2": {
        "code": "5/2",
        "grade": "الصف الخامس الابتدائي",
        "label": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "studentCount": 23
    },
    "5/3": {
        "code": "5/3",
        "grade": "الصف الخامس الابتدائي",
        "label": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "studentCount": 22
    },
    "G5": {
        "code": "G5",
        "grade": "الصف الخامس الابتدائي",
        "label": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "studentCount": 17
    },
    "6/1": {
        "code": "6/1",
        "grade": "الصف السادس الابتدائي",
        "label": "الصف السادس الابتدائي - فصل (6ب 1)",
        "studentCount": 26
    },
    "6/2": {
        "code": "6/2",
        "grade": "الصف السادس الابتدائي",
        "label": "الصف السادس الابتدائي - فصل (6ب 2)",
        "studentCount": 24
    },
    "6/3": {
        "code": "6/3",
        "grade": "الصف السادس الابتدائي",
        "label": "الصف السادس الابتدائي - فصل (6ب 3)",
        "studentCount": 24
    },
    "G6": {
        "code": "G6",
        "grade": "الصف السادس الابتدائي",
        "label": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "studentCount": 12
    }
};

var studentsDb = {
    "s_3_1_1": {
        "id": "1102938001",
        "name": "أحمد صالح مغرم الغامدي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_2": {
        "id": "1102938002",
        "name": "الوسام عبد الرحمن محمد الميمني",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_3": {
        "id": "1102938003",
        "name": "ثامر محمد عبد الله المالكي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_4": {
        "id": "1102938004",
        "name": "جابر محمد جابر الأسمري",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 3,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_5": {
        "id": "1102938005",
        "name": "خالد فيصل بن فالح المقاطي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_6": {
        "id": "1102938006",
        "name": "خلف عبد الله خلف المصيري",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_7": {
        "id": "1102938007",
        "name": "سعد بندر سعد السليماني",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_3_1_8": {
        "id": "1102938008",
        "name": "سعود ماجد عبد الله الغامدي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_9": {
        "id": "1102938009",
        "name": "سعود موسى مشبب القحطاني",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_10": {
        "id": "1102938010",
        "name": "سلمان سلطان معيش اللحياني",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_11": {
        "id": "1102938011",
        "name": "عبد العزيز صالح محمد الزايدي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_12": {
        "id": "1102938012",
        "name": "عبد العزيز محمد جبير الخالدي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_13": {
        "id": "1102938013",
        "name": "عبد العزيز محمد حامد العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_14": {
        "id": "1102938014",
        "name": "عبد الله محمد بن حسن الكبكبي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 3,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_15": {
        "id": "1102938015",
        "name": "عبد الملك فيصل منصور الشريف",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_16": {
        "id": "1102938016",
        "name": "فهد منصور بن وصل الله القثامي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_17": {
        "id": "1102938017",
        "name": "مازن عبد الرحمن احمد ولي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_18": {
        "id": "1102938018",
        "name": "محمد عبد الواحد محمد حمصي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_19": {
        "id": "1102938019",
        "name": "معاذ بندر بن مليح المفرجي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_20": {
        "id": "1102938020",
        "name": "معتز متعب حسن جيشي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_21": {
        "id": "1102938021",
        "name": "نايف متعب فارع العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_22": {
        "id": "1102938022",
        "name": "نايف مشاري نايف الرويس",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_23": {
        "id": "1102938023",
        "name": "هتان عبد الله سعد العلياني",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_1_24": {
        "id": "1102938024",
        "name": "وسام حسين محيسن المالكي",
        "grade": "الصف الثالث الابتدائي - فصل (1/3) ب",
        "classCode": "3/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_1": {
        "id": "1102938025",
        "name": "اديب طلال بن حامد البلادي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_2": {
        "id": "1102938026",
        "name": "بتال بدر سعود العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_3": {
        "id": "1102938027",
        "name": "بتال فواز بن علي باجحلان",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 2,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 2,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_3_2_4": {
        "id": "1102938028",
        "name": "بدر عبد المحسن عبيد العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_5": {
        "id": "1102938029",
        "name": "بلال عبد الله يحى حكمي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_6": {
        "id": "1102938030",
        "name": "بندر فالح تركي العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 2,
                "arabic": 3,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_7": {
        "id": "1102938031",
        "name": "تميم مصلح معتوق الغريبي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_8": {
        "id": "1102938032",
        "name": "جابر عبد الله جابر السعيدي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_9": {
        "id": "1102938033",
        "name": "حمزة محمد حمزة باحيدر",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_3_2_10": {
        "id": "1102938034",
        "name": "خالد عبد الرحمن خالد الوذيناني",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_11": {
        "id": "1102938035",
        "name": "خالد فارس خالد العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_12": {
        "id": "1102938036",
        "name": "سلمان رائد سعيد الزهراني",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_13": {
        "id": "1102938037",
        "name": "سيف فايز محمد العتيبي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_14": {
        "id": "1102938038",
        "name": "سيف محمد عبد الله الزهراني",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 2,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_3_2_15": {
        "id": "1102938039",
        "name": "عبد الله تركي عبد الله الجميعي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_16": {
        "id": "1102938040",
        "name": "عدي محمد بن امبارك النفاعي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_17": {
        "id": "1102938041",
        "name": "عمر محمد بن عبد الله الزهراني",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_3_2_18": {
        "id": "1102938042",
        "name": "عمر محمد عطية الثقفي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_19": {
        "id": "1102938043",
        "name": "محمد سلطان سعود الشريف",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_20": {
        "id": "1102938044",
        "name": "منصور عبد الله منصور السعيدي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_21": {
        "id": "1102938045",
        "name": "نادر محمد حماد الثمالي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_22": {
        "id": "1102938046",
        "name": "نايف مشعل طيب العميري",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_23": {
        "id": "1102938047",
        "name": "هياف سطام سعيد باجبير",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_24": {
        "id": "1102938048",
        "name": "ياسر مازن سعيد باحويرث",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_25": {
        "id": "1102938049",
        "name": "يحي نور يحي ابو الخير",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_26": {
        "id": "1102938050",
        "name": "يحيى حسن عبد الوهاب خان",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_3_2_27": {
        "id": "1102938051",
        "name": "يزيد فهد محمد نجمي",
        "grade": "الصف الثالث الابتدائي - فصل (2/3) ب",
        "classCode": "3/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_1": {
        "id": "1102938052",
        "name": "اياد جلال عبد المحسن الزهراني",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_2": {
        "id": "1102938053",
        "name": "باسم محمد عايد المالكي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_3": {
        "id": "1102938054",
        "name": "تيم حاتم بن صالح كابلي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 2,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 1,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G3_4": {
        "id": "1102938055",
        "name": "حمد عبدالرحمن حمد العقيل",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_5": {
        "id": "1102938056",
        "name": "رواف ناصر مبارك القرشي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_6": {
        "id": "1102938057",
        "name": "ريان فيصل منصور الحصيني",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 2,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_7": {
        "id": "1102938058",
        "name": "زين احمد حسين المحنكر",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_8": {
        "id": "1102938059",
        "name": "سيف محمد مسعود الفهمي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_9": {
        "id": "1102938060",
        "name": "صالح طلال صالح السفياني",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_10": {
        "id": "1102938061",
        "name": "طلال سامي ضيف الله الحارثي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_11": {
        "id": "1102938062",
        "name": "عبدالملك عبدالحكيم بن عبدربه الصاعدي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 2,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G3_12": {
        "id": "1102938063",
        "name": "عمار عبدالمعين سفر المطرفي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_13": {
        "id": "1102938064",
        "name": "عمر سامي جميل قاضي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_14": {
        "id": "1102938065",
        "name": "غازي مشاري غازي النفيعي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_15": {
        "id": "1102938066",
        "name": "فارس ماجد حامد الحربي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_16": {
        "id": "1102938067",
        "name": "فيصل سامي بن سعيد الحربي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_17": {
        "id": "1102938068",
        "name": "قصي عاصم عبدالحميد سندي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_18": {
        "id": "1102938069",
        "name": "محمد حسام محمد المولد",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_19": {
        "id": "1102938070",
        "name": "محمد رائد فهد ابوعوف",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_20": {
        "id": "1102938071",
        "name": "محمد فهد فريج العتيبي",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 1
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 3,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G3_21": {
        "id": "1102938072",
        "name": "مساعد سلطان بن عبدالرحمن ال زيد",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G3_22": {
        "id": "1102938073",
        "name": "يمان محمد غازي حبيب الرحمن",
        "grade": "الصف الثالث الابتدائي - قسم الدبلوما (G3)",
        "classCode": "G3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 5,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 2
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_1_1": {
        "id": "1102938074",
        "name": "أحمد عبد الله احمد القرشي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_2": {
        "id": "1102938075",
        "name": "أحمد فهد علي هزازي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 3,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_3": {
        "id": "1102938076",
        "name": "اصيل عبد الرحمن ضيف الله المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_4": {
        "id": "1102938077",
        "name": "باسل احمد بن عواض الوذيناني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_5": {
        "id": "1102938078",
        "name": "حامد هيثم حامد النمري",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_6": {
        "id": "1102938079",
        "name": "حمزة محمد عزيز عزب",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_7": {
        "id": "1102938080",
        "name": "خالد أحمد فارس العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_8": {
        "id": "1102938081",
        "name": "رايف محمد مساوي العميري",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_9": {
        "id": "1102938082",
        "name": "رواد حسين محيسن المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_10": {
        "id": "1102938083",
        "name": "سعد رائد سعد النفيعي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_11": {
        "id": "1102938084",
        "name": "سلمان مسفر بن مبروك السويهري",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 3,
                "islamic": 3,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_12": {
        "id": "1102938085",
        "name": "صالح فهد صالح الرشيدي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_13": {
        "id": "1102938086",
        "name": "عبد العزيز ثامر عبيد الهذلي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_1_14": {
        "id": "1102938087",
        "name": "عبد الله فريد عبد الله القرشي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_15": {
        "id": "1102938088",
        "name": "عبد الله مشعل طيب العميري",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_16": {
        "id": "1102938089",
        "name": "غيث فهد شخص الغامدي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_17": {
        "id": "1102938090",
        "name": "فراس خالد بن فارس العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_18": {
        "id": "1102938091",
        "name": "محمد سعيد بن عواض الحارثي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_19": {
        "id": "1102938092",
        "name": "محمد مجدي بن محمد القثامي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_1_20": {
        "id": "1102938093",
        "name": "ناصر مشهور عطية الغامدي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_21": {
        "id": "1102938094",
        "name": "نايف غازي شباب المقاطي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_22": {
        "id": "1102938095",
        "name": "وسام صالح احمد الزهراني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_1_23": {
        "id": "1102938096",
        "name": "يوسف احمد سالم الحسني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_1_24": {
        "id": "1102938097",
        "name": "يوسف باسم حسن الحارثي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 1)",
        "classCode": "4/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_1": {
        "id": "1102938098",
        "name": "آرام هيثم بن محمد الأفغاني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 1,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_2_2": {
        "id": "1102938099",
        "name": "أنس جمعان عالي الغامدي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_3": {
        "id": "1102938100",
        "name": "احمد عبد العزيز مساعد الثقفي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_4": {
        "id": "1102938101",
        "name": "باسل تركي ياسين جراح",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_5": {
        "id": "1102938102",
        "name": "براء علاء بن عبد المعطي الحسني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_6": {
        "id": "1102938103",
        "name": "حزام سعد محمد القثامي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_7": {
        "id": "1102938104",
        "name": "خالد فايز عايض القثامي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_8": {
        "id": "1102938105",
        "name": "زامل عماد زامل الشريف",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_9": {
        "id": "1102938106",
        "name": "زياد فراس فواز المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_10": {
        "id": "1102938107",
        "name": "سعد عبد الله سعد العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_11": {
        "id": "1102938108",
        "name": "سعود فهد بن تركي الحازمي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 2,
                "arabic": 4,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_12": {
        "id": "1102938109",
        "name": "سلمان ثامر بن يحيى العمري",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 3,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_13": {
        "id": "1102938110",
        "name": "سلمان محمد عواض النفيعي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_14": {
        "id": "1102938111",
        "name": "سليمان علي سليمان الكريدا",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_15": {
        "id": "1102938112",
        "name": "عازم عبد الرحمن عبد الله النفيعي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_16": {
        "id": "1102938113",
        "name": "عبد الله خالد عبد الله الصوينع",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_17": {
        "id": "1102938114",
        "name": "عزام سعيد عثمان الغامدي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 2,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 2,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_2_18": {
        "id": "1102938115",
        "name": "فارس مشاري فارس العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_19": {
        "id": "1102938116",
        "name": "فراس احمد زايد القرشي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_20": {
        "id": "1102938117",
        "name": "فيصل مشاري محمد العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_21": {
        "id": "1102938118",
        "name": "محمد عبد الله موسى فران",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_22": {
        "id": "1102938119",
        "name": "مشعل طلال مشعل السرواني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_23": {
        "id": "1102938120",
        "name": "وسام فيصل بن حسن الزهراني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_2_24": {
        "id": "1102938121",
        "name": "وسيم عمر غرم الله المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 4,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 4,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 3,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 3,
                "math": 2
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_2_25": {
        "id": "1102938122",
        "name": "يوسف عبد الله عطية الله الفهمي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 2)",
        "classCode": "4/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 3,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_1": {
        "id": "1102938123",
        "name": "أحمد عبد العزيز حميد المعبدي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_2": {
        "id": "1102938124",
        "name": "الياس عبد الله محمد الشريف",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_3": {
        "id": "1102938125",
        "name": "الياس يوسف مساعد الزهراني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_4": {
        "id": "1102938126",
        "name": "باسل عبد الله مستور العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_5": {
        "id": "1102938127",
        "name": "بداح عمر احمد بادحيدوح",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_6": {
        "id": "1102938128",
        "name": "رائد زياد هلال الصليمي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_7": {
        "id": "1102938129",
        "name": "ريان عبد العزيز مساعد الحربي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_8": {
        "id": "1102938130",
        "name": "سعد سلطان معيش اللحياني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_9": {
        "id": "1102938131",
        "name": "سعود عادل محمد السواط",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_10": {
        "id": "1102938132",
        "name": "سعود نايف عبيد الله الثبيتي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_11": {
        "id": "1102938133",
        "name": "سلمان صالح فلحان القرشي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 3,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 3,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_12": {
        "id": "1102938134",
        "name": "سلمان صالح جويبر العصيمي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_13": {
        "id": "1102938135",
        "name": "عبد الله محمد بن غازي القرشي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_4_3_14": {
        "id": "1102938136",
        "name": "عمر علاء عزالدين القحطاني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_15": {
        "id": "1102938137",
        "name": "كنان حسين على الشمراني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_16": {
        "id": "1102938138",
        "name": "محمد نامي محمد الجودي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 3,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_17": {
        "id": "1102938139",
        "name": "معاذ سميح محبوب العتيبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 3,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_18": {
        "id": "1102938140",
        "name": "معاذ عيد عايد الكبكبي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 3,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 3,
                "science": 3,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_19": {
        "id": "1102938141",
        "name": "معاذ فائز علي المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_20": {
        "id": "1102938142",
        "name": "نايف عبد العزيز عابد الثبيتي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_21": {
        "id": "1102938143",
        "name": "نصار ايمن عبد الكريم الحسني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_22": {
        "id": "1102938144",
        "name": "هتان خالد عبد الرحمن الزهراني",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_23": {
        "id": "1102938145",
        "name": "هتان يوسف عبيد المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_4_3_24": {
        "id": "1102938146",
        "name": "وليد محمد زايد المالكي",
        "grade": "الصف الرابع الابتدائي - فصل (4ب 3)",
        "classCode": "4/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_1": {
        "id": "1102938147",
        "name": "أحمد عبدالمجيد احمد الزهراني",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_2": {
        "id": "1102938148",
        "name": "ابراهيم اسامه ابراهيم عواد",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_3": {
        "id": "1102938149",
        "name": "اياد غازي سعيد المحمادي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_4": {
        "id": "1102938150",
        "name": "باسل محمد عايد المالكي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G4_5": {
        "id": "1102938151",
        "name": "بتال طلال احمد العوفي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 3,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_6": {
        "id": "1102938152",
        "name": "بسام عبدالحكيم ضيف الله المطيري",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_7": {
        "id": "1102938153",
        "name": "بندر حسام حامد الخزاعي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G4_8": {
        "id": "1102938154",
        "name": "تركي حميد حامد المقاطي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_9": {
        "id": "1102938155",
        "name": "تيم حماد سليم القرشي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_10": {
        "id": "1102938156",
        "name": "حسام سيف عبدالمحسن السلمي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 4,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G4_11": {
        "id": "1102938157",
        "name": "حمزة ريان بن حمزة الشريف",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_12": {
        "id": "1102938158",
        "name": "سعود ثامر محمد العتيبي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_13": {
        "id": "1102938159",
        "name": "سعود طلال عتيق العصيمي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_14": {
        "id": "1102938160",
        "name": "سعود عبدالملك عوض الله السلمي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_15": {
        "id": "1102938161",
        "name": "سلطان عبدالحميد حسن الشريف",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_16": {
        "id": "1102938162",
        "name": "سليمان داود بن سليمان قاضي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_17": {
        "id": "1102938163",
        "name": "صالح حاتم بن صالح كابلي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_18": {
        "id": "1102938164",
        "name": "صالح حميدان صالح الغامدي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_19": {
        "id": "1102938165",
        "name": "عزام منصور بن صالح العضيب",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 2,
                "science": 1,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 2,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G4_20": {
        "id": "1102938166",
        "name": "عمر باسم عثمان باصمد",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_21": {
        "id": "1102938167",
        "name": "فراس نايف مسحل القرشي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 3,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_22": {
        "id": "1102938168",
        "name": "فيصل سلطان بن ابراهيم النفيعي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_23": {
        "id": "1102938169",
        "name": "محمد تركي عبدالعزيز القثامي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 1,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G4_24": {
        "id": "1102938170",
        "name": "محمد منصور محمد الجودي",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 3,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G4_25": {
        "id": "1102938171",
        "name": "معاذ حمزة بن محمد الشريف",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G4_26": {
        "id": "1102938172",
        "name": "يزيد فهد صالح باجعفر",
        "grade": "الصف الرابع الابتدائي - قسم الدبلوما (G4)",
        "classCode": "G4",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_1": {
        "id": "1102938173",
        "name": "أحمد مهند محمد رفاعي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_2": {
        "id": "1102938174",
        "name": "أديب بن عبد العزيز حسن المالكي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_3": {
        "id": "1102938175",
        "name": "أنس عبد الرحمن مساعد الزهراني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_4": {
        "id": "1102938176",
        "name": "بسام خالد عبد الرحمن العمودي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 3,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_5_1_5": {
        "id": "1102938177",
        "name": "تميم حاسن حسين المسعودي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_6": {
        "id": "1102938178",
        "name": "تميم زكي بن مرزوق الهذلي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_7": {
        "id": "1102938179",
        "name": "حمود فهد ابن عبد الله المطرفي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_8": {
        "id": "1102938180",
        "name": "زياد احمد بن عوض المالكي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_9": {
        "id": "1102938181",
        "name": "زياد متعب حسن جيشي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_10": {
        "id": "1102938182",
        "name": "سطام مشهور عيد القثامي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_11": {
        "id": "1102938183",
        "name": "سعد عبد الله نوار العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_12": {
        "id": "1102938184",
        "name": "سعود فهد فهيدان الصفياني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_13": {
        "id": "1102938185",
        "name": "عبدالله بن تركي عطية القرشي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 3,
                "english": 2,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 3,
                "math": 4
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_14": {
        "id": "1102938186",
        "name": "عبد الملك احمد الزهراني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_15": {
        "id": "1102938187",
        "name": "فهد بندر سعود العميري",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_16": {
        "id": "1102938188",
        "name": "محمد منصور بن جابر الهذلي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_17": {
        "id": "1102938189",
        "name": "معاذ بدر بن طالع الهذلي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_18": {
        "id": "1102938190",
        "name": "مهاب طارق نوار ضيف الله الجعيد",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_19": {
        "id": "1102938191",
        "name": "نواف صويلح ابن عايض القرشي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_1_20": {
        "id": "1102938192",
        "name": "وليد عباد ابن محمد العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_1": {
        "id": "1102938193",
        "name": "أحمد مشاري احمد دوبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_2": {
        "id": "1102938194",
        "name": "أمير عبد الله جابر الهذلي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_3": {
        "id": "1102938195",
        "name": "احمد ماجد عبد الله المسعودي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_4": {
        "id": "1102938196",
        "name": "تميم سهل قاعد العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_5": {
        "id": "1102938197",
        "name": "تميم عادل حمدان القرشي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_6": {
        "id": "1102938198",
        "name": "تميم عاطف سالم السويهري",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_7": {
        "id": "1102938199",
        "name": "جسار سعود فارس العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_8": {
        "id": "1102938200",
        "name": "جمهور ماجد ابراهيم الغامدي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_9": {
        "id": "1102938201",
        "name": "حاكم مقبول مطلق العصيمي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_10": {
        "id": "1102938202",
        "name": "حسين احمد بن حسين السويهري",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_11": {
        "id": "1102938203",
        "name": "حمد خالد حمد اللحياني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_12": {
        "id": "1102938204",
        "name": "سعود هشام بن سعود الصليمي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_13": {
        "id": "1102938205",
        "name": "سلمان نايف منير الهذلي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_14": {
        "id": "1102938206",
        "name": "عاصم محمد بن عبد الله المالكي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_15": {
        "id": "1102938207",
        "name": "عبد الله ايوب عبد الله المبرز",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_16": {
        "id": "1102938208",
        "name": "عبيد مشاري محسن العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_17": {
        "id": "1102938209",
        "name": "محمد تركي ابن ضيف الله القثامي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_18": {
        "id": "1102938210",
        "name": "محمد رائد محمد الحارثي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 1,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_5_2_19": {
        "id": "1102938211",
        "name": "محمد مبروك بن احمد الزهراني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_20": {
        "id": "1102938212",
        "name": "محمد ممدوح ابن محمد الذيابي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 4,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_5_2_21": {
        "id": "1102938213",
        "name": "مشاري جاد بن مطلق الذيابي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 3,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_22": {
        "id": "1102938214",
        "name": "مشعل مشاري مشعل المقاطي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_2_23": {
        "id": "1102938215",
        "name": "نواف مطلق محمد الدعجاني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_1": {
        "id": "1102938216",
        "name": "الوليد خالد على السفياني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_2": {
        "id": "1102938217",
        "name": "جازي فايز محمد العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_3": {
        "id": "1102938218",
        "name": "خالد حسن بن غالي المطرفي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_4": {
        "id": "1102938219",
        "name": "خالد عازم بن عبد الله النفيعي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_5": {
        "id": "1102938220",
        "name": "راكان رواد بن عبد السلام فلاته",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_6": {
        "id": "1102938221",
        "name": "رواد احمد محمد العميري",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_7": {
        "id": "1102938222",
        "name": "زياد بندر غرم الله الغامدي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_8": {
        "id": "1102938223",
        "name": "سعيد علي سعيد الزهراني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_9": {
        "id": "1102938224",
        "name": "سلطان عبدالله عبد المحسن العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_10": {
        "id": "1102938225",
        "name": "عبد العزيز ياسرعبدالرحمن خوقير",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_11": {
        "id": "1102938226",
        "name": "عبدالله غازى عبدالله الجابري",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_12": {
        "id": "1102938227",
        "name": "علي خليل ابراهيم القرشي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 1,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_5_3_13": {
        "id": "1102938228",
        "name": "فهد عبدالله عيد العصيمي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_14": {
        "id": "1102938229",
        "name": "كنان احمد شوقي اللحام",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_15": {
        "id": "1102938230",
        "name": "ماجد محمد عواض النفيعي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_16": {
        "id": "1102938231",
        "name": "مازن صالح محمد الزهراني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_17": {
        "id": "1102938232",
        "name": "محمد صديق عبدالله شلظوم",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_18": {
        "id": "1102938233",
        "name": "محمد فايز محمد العتيبي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_19": {
        "id": "1102938234",
        "name": "معاذ حبيب مطير القرشي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_20": {
        "id": "1102938235",
        "name": "معتز بسام خالد كيكي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_21": {
        "id": "1102938236",
        "name": "نايف عادل تركي المطرفي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_5_3_22": {
        "id": "1102938237",
        "name": "نايف عبيدالله بن سليم المسعودي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 3)",
        "classCode": "5/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_1": {
        "id": "1102938238",
        "name": "أحمد طلال احمد العوفي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_2": {
        "id": "1102938239",
        "name": "ابراهيم حسن بن ابراهيم الفتني",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_3": {
        "id": "1102938240",
        "name": "اياد مشعل عابد السواط",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_4": {
        "id": "1102938241",
        "name": "بتال ريان بن حمزة الشريف",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_5": {
        "id": "1102938242",
        "name": "باسل سلطان بن ابراهيم النفيعي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 1,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 2
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G5_6": {
        "id": "1102938243",
        "name": "باسم عبدالرحمن ربيع المطيري",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_7": {
        "id": "1102938244",
        "name": "بدر سامر عبدالعزيز صلواتي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_8": {
        "id": "1102938245",
        "name": "تميم محمد سليم الصاعدي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 3,
                "english": 2,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_9": {
        "id": "1102938246",
        "name": "جهاد هاني بن عبدالعزيز بنتن",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_10": {
        "id": "1102938247",
        "name": "راكان محمد بن صالح السفياني",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_11": {
        "id": "1102938248",
        "name": "ريان عبدالله محمد الهذلي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_12": {
        "id": "1102938249",
        "name": "سيف محمد مسفر الخديدي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_13": {
        "id": "1102938250",
        "name": "عبدالمجيد خالد بن عبدالمجيد الحارثي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_14": {
        "id": "1102938251",
        "name": "فهد علي حسن الفيفي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 2,
                "science": 4,
                "math": 1
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 4,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G5_15": {
        "id": "1102938252",
        "name": "فواز سلطان بن عبدالمحسن بن عجلان",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_G5_16": {
        "id": "1102938253",
        "name": "مؤيد رائد فهد ابوعوف",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G5_17": {
        "id": "1102938254",
        "name": "مبارك عبدالملك عوض الله السلمي",
        "grade": "الصف الخامس الابتدائي - قسم الدبلوما (G5)",
        "classCode": "G5",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_1": {
        "id": "1102938255",
        "name": "أمير سامي عبد الله الحسني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_2": {
        "id": "1102938256",
        "name": "بتال سامي سفير القثامي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_3": {
        "id": "1102938257",
        "name": "تركي محمد سعود الحارثي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "homework": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_4": {
        "id": "1102938258",
        "name": "تركي مشعل أحمد المفضلي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_5": {
        "id": "1102938259",
        "name": "تميم رائد عبد الله المالكي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_6": {
        "id": "1102938260",
        "name": "جسار خالد فهد الحارثي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_7": {
        "id": "1102938261",
        "name": "جسار مازن بن مسلم المطرفي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_8": {
        "id": "1102938262",
        "name": "حسن سعود عبد العزيز الخلف",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_9": {
        "id": "1102938263",
        "name": "خالد رائد عيدان الزهراني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_10": {
        "id": "1102938264",
        "name": "رائف محمد بن عاتق القرشي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_11": {
        "id": "1102938265",
        "name": "رواف حسين بن حاسن القثامي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_12": {
        "id": "1102938266",
        "name": "سند عماد بن سالم الحسني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_1_13": {
        "id": "1102938267",
        "name": "طه هيثم محمد الأفغاني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_14": {
        "id": "1102938268",
        "name": "عبداالله حسام فؤاد شبانه",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 2,
                "arabic": 2,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_15": {
        "id": "1102938269",
        "name": "عبد الرحمن مطلق سند الشريف",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_16": {
        "id": "1102938270",
        "name": "عبد الله عبد العزيز السرواني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_17": {
        "id": "1102938271",
        "name": "عبدالله محمد عبدالله الحارثي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_18": {
        "id": "1102938272",
        "name": "عز اسامه عمر مجيده",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_19": {
        "id": "1102938273",
        "name": "عمر حسن عطية القرشي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_20": {
        "id": "1102938274",
        "name": "غيث زامل سعد الدين الشريف",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_21": {
        "id": "1102938275",
        "name": "قصي حاتم عبدالله المسعودي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_22": {
        "id": "1102938276",
        "name": "كرم عبدالرحيم دخيل الله المنتشري",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_23": {
        "id": "1102938277",
        "name": "محمد ابراهيم بن احمد الأسمري",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_24": {
        "id": "1102938278",
        "name": "محمد عادل خلف القرشي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_25": {
        "id": "1102938279",
        "name": "مشاري فايز عايض القثامي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_1_26": {
        "id": "1102938280",
        "name": "يحيى خالد يحي عمرين",
        "grade": "الصف السادس الابتدائي - فصل (6ب 1)",
        "classCode": "6/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_1": {
        "id": "1102938281",
        "name": "أمير عاصم عويض العميري",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_2": {
        "id": "1102938282",
        "name": "تركي عدنان مسحل القرشي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_2_3": {
        "id": "1102938283",
        "name": "تميم ماجد خلف الذبياني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 3,
                "science": 2,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 1,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 2,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 2
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_2_4": {
        "id": "1102938284",
        "name": "حازم علي بن عبيد الحربي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_5": {
        "id": "1102938285",
        "name": "ريان بكر عطيه الحواجره",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_6": {
        "id": "1102938286",
        "name": "سعد عبدالله بن الحميدي البراق",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_7": {
        "id": "1102938287",
        "name": "سعود مساعد بن منيع المطرفي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_8": {
        "id": "1102938288",
        "name": "سلطان بندر بن محمد الزيادي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 3,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 2,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_9": {
        "id": "1102938289",
        "name": "سلطان صالح عمر بن جحلان",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_10": {
        "id": "1102938290",
        "name": "سلمان خالد عيضه الثبيتي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_11": {
        "id": "1102938291",
        "name": "طلال بندر عويض الجعيد",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_2_12": {
        "id": "1102938292",
        "name": "عبدالعزيز خالد بن محمد سليمان",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 1,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_2_13": {
        "id": "1102938293",
        "name": "عبدالله محمد بن ثواب العتيبي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_14": {
        "id": "1102938294",
        "name": "عدنان دخيل الله دخيل النفيعي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 1,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 1,
                "math": 1
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_2_15": {
        "id": "1102938295",
        "name": "فيصل نايف الهنيدي ابا العلا",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_16": {
        "id": "1102938296",
        "name": "كنان صابر حماد الصواط",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_17": {
        "id": "1102938297",
        "name": "محمد بن بندر بن محمد سهلي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_18": {
        "id": "1102938298",
        "name": "محمد رامي بن مشعل الصوفي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_19": {
        "id": "1102938299",
        "name": "محمد عبدالدايم بن عبدالله الكبكبي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_20": {
        "id": "1102938300",
        "name": "محمد عدنان محمد المنعمي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_21": {
        "id": "1102938301",
        "name": "محمد ماجد عبدالله الكبكبي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_2_22": {
        "id": "1102938302",
        "name": "مشاري عبدالعزيز غزاي العتيبي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 3,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 3,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_23": {
        "id": "1102938303",
        "name": "نايف جميل زابن المسعودي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 4,
                "islamic": 3,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_2_24": {
        "id": "1102938304",
        "name": "هتان عبدالرحمن مستور العتيبي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 2)",
        "classCode": "6/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_1": {
        "id": "1102938305",
        "name": "أنس بن محمد بن مهدي الزهراني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 4,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_2": {
        "id": "1102938306",
        "name": "ابراهيم خالد امين امام",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 4,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_3": {
        "id": "1102938307",
        "name": "اويس ياسين عبدالكريم بويري",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_4": {
        "id": "1102938308",
        "name": "بتال طارق نوار الجعيد",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 2,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_5": {
        "id": "1102938309",
        "name": "تركي عبدالرحمن على الشويماني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 3,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_6": {
        "id": "1102938310",
        "name": "تيم ياسر ماطر المطرفي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_7": {
        "id": "1102938311",
        "name": "حسام صالح سعيد الزهراني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 2,
                "science": 2,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_8": {
        "id": "1102938312",
        "name": "رسلان هيثم عبدالسلام نصرالدين",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_9": {
        "id": "1102938313",
        "name": "ريان احمد صعفق الفدعاني العنزي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_10": {
        "id": "1102938314",
        "name": "سعود خالد سعود الرويس",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 1
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_11": {
        "id": "1102938315",
        "name": "عبدالله صالح عمر ربيقان",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_12": {
        "id": "1102938316",
        "name": "عبدالله عزام مصطفى قبوري",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 2,
                "math": 1
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_13": {
        "id": "1102938317",
        "name": "عمار متعب حسن جيشي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_14": {
        "id": "1102938318",
        "name": "عمر احمد بن محمدنور الحربي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_15": {
        "id": "1102938319",
        "name": "فزاع عبدالله فهيد المفرجي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 2,
                "math": 1
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 1,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 5,
                "math": 1
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_16": {
        "id": "1102938320",
        "name": "فهد عبدالله منصور الذبياني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 2,
                "arabic": 1,
                "science": 3,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 1,
                "science": 3,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": false,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_17": {
        "id": "1102938321",
        "name": "ماطر منصور سعد المطرفي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_18": {
        "id": "1102938322",
        "name": "محمد سامى قليل الحارثي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_19": {
        "id": "1102938323",
        "name": "محمد صالح محمد الزايدي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_20": {
        "id": "1102938324",
        "name": "محمد عبدالله محمد الشريف",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 2,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 2,
                "science": 3,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 1,
                "science": 1,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 5,
                "math": 2
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 2,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "s_6_3_21": {
        "id": "1102938325",
        "name": "محمد مطلق محمد الدعجاني",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_22": {
        "id": "1102938326",
        "name": "محيسن بن حسين محيسن المالكي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_23": {
        "id": "1102938327",
        "name": "معاذ سلطان بن حجلي الندوي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_6_3_24": {
        "id": "1102938328",
        "name": "يزن ماجد عواض القرشي",
        "grade": "الصف السادس الابتدائي - فصل (6ب 3)",
        "classCode": "6/3",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_1": {
        "id": "1102938329",
        "name": "أحمد ريان بن حمزة الشريف",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_2": {
        "id": "1102938330",
        "name": "أحمد عاصم عبدالحميد سندي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_3": {
        "id": "1102938331",
        "name": "أحمد محمد عايد المالكي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_4": {
        "id": "1102938332",
        "name": "ريان نايف مسحل القرشي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 2,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "behavior": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_5": {
        "id": "1102938333",
        "name": "عمر محمد احمد المالكي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 4
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_6": {
        "id": "1102938334",
        "name": "ماجد نبيل خلف الله الحسني",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 4,
                "math": 5
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 5,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_7": {
        "id": "1102938335",
        "name": "محمد عبدالله مطر الزهراني",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_8": {
        "id": "1102938336",
        "name": "محمد غازي محمد العتيبي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 4,
                "science": 4,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_9": {
        "id": "1102938337",
        "name": "مشاري سالم معيض العتيبي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 4,
                "math": 2
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_10": {
        "id": "1102938338",
        "name": "هاشم هانى بن محمد الحازمى",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 2
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 3
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_11": {
        "id": "1102938339",
        "name": "هشام حماد حمد العتيبي",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 3,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 3,
                "islamic": 5,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 5
            },
            "participation": {
                "digital": 4,
                "islamic": 5,
                "english": 3,
                "arabic": 2,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "s_G6_12": {
        "id": "1102938340",
        "name": "يوسف ماجد محمد ابو شعيب",
        "grade": "الصف السادس الابتدائي - قسم الدبلوما (G6)",
        "classCode": "G6",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 5,
                "science": 4,
                "math": 3
            },
            "homework": {
                "digital": 5,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 4,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "azzam": {
        "id": "1102938475",
        "name": "عزام خالد بن شعف المالكي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "يحتاج الطالب إلى تكثيف المتابعة المنزلية والتركيز على المهارات الأساسية في لغتي والرياضيات لرفع التحصيل.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 5,
                "english": 5,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 1,
                "science": 3,
                "math": 1
            },
            "participation": {
                "digital": 5,
                "islamic": 4,
                "english": 4,
                "arabic": 2,
                "science": 4,
                "math": 2
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 3,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": true,
            "perf_2": true,
            "perf_3": true,
            "perf_4": false,
            "cause_1": true,
            "cause_2": false,
            "cause_3": true,
            "cause_4": false,
            "proc_1": true,
            "proc_2": true,
            "proc_3": true,
            "out_1": true,
            "out_2": true,
            "out_3": false
        }
    },
    "faisal": {
        "id": "1188334455",
        "name": "فيصل عمر بن عبد الله الزهراني",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 1)",
        "classCode": "5/1",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "طالب متميز ومتفوق خلقاً وعلماً، مشارك فعال في الأنشطة الصفية ومنضبط في أداء المهام الموكلة إليه.",
        "scores": {
            "exams": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "homework": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 4,
                "science": 5,
                "math": 5
            },
            "participation": {
                "digital": 5,
                "islamic": 5,
                "english": 4,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 5,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    },
    "rayan": {
        "id": "1199445566",
        "name": "ريان سعيد بن سعد الغامدي",
        "grade": "الصف الخامس الابتدائي - فصل (5ب 2)",
        "classCode": "5/2",
        "date": "2026-10-21",
        "period": "تقرير شهر جمادى الأولى 1448هـ",
        "notes": "مستوى أكاديمي وسلوكي جيد جداً، نوصي بمواصلة القراءة وحل الأنشطة الإثرائية لتعزيز التفوق.",
        "scores": {
            "exams": {
                "digital": 4,
                "islamic": 3,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "homework": {
                "digital": 4,
                "islamic": 4,
                "english": 4,
                "arabic": 3,
                "science": 5,
                "math": 3
            },
            "participation": {
                "digital": 4,
                "islamic": 3,
                "english": 4,
                "arabic": 4,
                "science": 4,
                "math": 4
            },
            "behavior": {
                "digital": 5,
                "islamic": 5,
                "english": 5,
                "arabic": 3,
                "science": 5,
                "math": 5
            },
            "attendance": {
                "digital": 5,
                "islamic": 4,
                "english": 3,
                "arabic": 3,
                "science": 5,
                "math": 5
            }
        },
        "remedial": {
            "perf_1": false,
            "perf_2": false,
            "perf_3": false,
            "perf_4": false,
            "cause_1": false,
            "cause_2": false,
            "cause_3": false,
            "cause_4": false,
            "proc_1": false,
            "proc_2": false,
            "proc_3": false,
            "out_1": false,
            "out_2": false,
            "out_3": false
        }
    }
};
