from django.shortcuts import render

# INFRAESTRUTURA DE SIMULAÇÃO DE MODELOS RELACIONAIS (MOCK QUERYSET)
class MockQuerySet:
    def __init__(self, data_list):
        self._data = data_list
    def exists(self):
        return len(self._data) > 0
    def all(self):
        return self._data

def cv_view(request):
    # 1. GRUPO PERSONAL INFO [Mapeamento Estrito do PDF]
    personal_info_data = {
        'nombre': 'Fernando',
        'apellidos': 'Silva Felix',
        'telefono1': '+34 600 000 000',
        'telefono2': '+34 930 000 000',
        'email_profesional1': 'fernando.silva@fsf.dev',
        'email_profesional2': '',
        'ciudad': 'Barcelona',
        'pais': 'España',
        'codigo_postal': '08018',
        'fecha_nacimiento': '1990-04-15',
        'nacionalidad': 'Española / Brasileña',
        'carnet_conducir': True,
        'disponibilidad': 'Inmediata / Full-Time',
        'foto': None,
    }

    # 2. GRUPO PROFESIONAL PROFILE
    professional_profile_data = {
        'profesion': 'Fullstack Security Engineer S6nior',
        'objetivo': 'Mitigar riesgos tecnológicos e implementar arquitecturas seguras a gran escala.',
        'resumen': 'Fullstack Software and Security Engineer with an extensive career trajectory. Expert in building distributed software architectures under Hexagonal and Domain-Driven Design principles, automating enterprise-scale operations, and orchestrating secure, sovereign cloud computing environments.'
    }

    # 3. COMPONENTES ADICIONAIS CONVERTIDOS PARA MOCK QUERYSETS
    work_experience_list = [
        {
            'puesto': 'Lead Fullstack & DevSecOps Engineer',
            'empresa': 'Veredict BI Systems',
            'ubicacion': 'Barcelona, España',
            'periodo': '01/2026 — Presente',
            'descripcion': 'Diseño de la plataforma analítica de auditoría de capital humano y reclutamiento predictivo, transformando datos brutos en mitigações de risco através de vetores semânticos.',
            'logros': 'Diseñar e implementar el motor neural en Python encargado del procesamiento de vectores semánticos.\nDesarrollar la matriz relacional de Risk Scoring basada en 4 pilares estables.\nAsegurar e integrar el almacenamiento distribuido empresarial con Snowflake.'
        }
    ]

    education_list = [
        {
            'titulo': 'Master in Cybersecurity Management',
            'centro': 'Labora Ara Formación',
            'ubicacion': 'Barcelona Centro',
            'periodo': '10/2026 — 10/2027',
            'en_curso': True
        },
        {
            'titulo': 'Graduado en Ingeniería Informática',
            'centro': 'Universidade Paulista UNIP',
            'ubicacion': 'Homologado',
            'periodo': 'Concluido',
            'en_curso': False
        }
    ]

    complementary_training_list = [
        {
            'nombre': 'Python Level 2 Professional (PCED // 2026)',
            'get_tipo_display': 'Certificación Profesional',
            'entidad': 'Instituto Tecnológico',
            'fecha': None
        },
        {
            'nombre': 'SnowPro Associate — Snowflake Cloud Data Architecture (2026)',
            'get_tipo_display': 'Especialización Avanzada',
            'entidad': 'Snowflake Academy',
            'fecha': None
        }
    ]

    skill_list = [
        {'nombre': 'Secure Software Architecture (DDD / Hexagonal)', 'tipo': 'hard', 'nivel': 9},
        {'nombre': 'AI Pipelines & Semantic Vector Extraction', 'tipo': 'hard', 'nivel': 9},
        {'nombre': 'Cloud Hardening (Azure / GCP / Snowflake)', 'tipo': 'hard', 'nivel': 9},
        {'nombre': 'Builder Mindset', 'tipo': 'soft'},
        {'nombre': 'Socio Técnico Estratégico', 'tipo': 'soft'},
        {'nombre': 'Mitigación de Riesgos Críticos', 'tipo': 'soft'},
        {'nombre': 'Visión de Producto End-to-End', 'tipo': 'soft'}
    ]

    language_list = [
        {'idioma': 'Español / Portugués', 'get_nivel_display': 'Lengua Materna (Bilingüe Nativo)', 'certificacion': ''},
        {'idioma': 'Inglés', 'get_nivel_display': 'Nivel C1', 'certificacion': 'Operations Enterprise'}
    ]

    project_list = [
        {
            'nombre': 'VEREDICT BI',
            'descripcion': 'Plataforma analítica de auditoría estratégica de capital humano y mitigación predictiva de riesgos de contratación masiva.',
            'tecnologias': 'Java 21 • Python • PostgreSQL • Embeddings • Docker',
            'link': '#'
        }
    ]

    # Envoltura del Objeto Principal CV
    cv_object = {
        'personal_info': personal_info_data,
        'professional_profile': professional_profile_data,
        'social_networks': {
            'linkedin': 'https://linkedin.com/in/fernando-silva',
            'github': 'https://github.com/nandosf',
            'portfolio': 'http://localhost:8000'
        }
    }

    # ESTRUTURA GLOBAL ENLAZADA AL MODELO CVPROFILE
    context = {
        'profile': {
            'slug': 'fernando-silva',
            'mostrar_perfil_profesional': True,
            'mostrar_redes': True,
            'mostrar_intereses': True,
            'mostrar_otros': True,
            'cv': cv_object,
            # Inyecciones dinámicas que responden perfectamente a .exists y .all
            'experiencias': MockQuerySet(work_experience_list),
            'educaciones': MockQuerySet(education_list),
            'formaciones': MockQuerySet(complementary_training_list),
            'habilidades': MockQuerySet(skill_list),
            'idiomas': MockQuerySet(language_list),
            'proyectos': MockQuerySet(project_list),
        }
    }
    
    return render(request, 'cv/index.html', context)