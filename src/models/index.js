import Atendimentos from "./Atendimentos";
import Psicologos from "./Psicologos";
import Pacientes from "./Pacientes";

Psicologos.hasMany(Atendimentos,{
    forignKey: 'psicologo_id',
});
Pacientes.hasMany(Atendimentos,{
    foreignKey: 'paciente_id',
});
Atendimentos.belongsTo(Psicologos,{
    foreignKey: 'psicologo_id',
});
Atendimentos.belongsTo(Pacientes,{
    foreignKey: 'paciente_id',
});

export { Psicologos, Pacientes, Atendimentos };